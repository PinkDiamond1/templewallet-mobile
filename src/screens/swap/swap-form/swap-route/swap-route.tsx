import React, { FC } from 'react';
import { View } from 'react-native';
import { Trade } from 'swap-router-sdk';

import { AssetAmountInterface } from '../../../../components/asset-amount-input/asset-amount-input';
import { tokenEqualityFn } from '../../../../components/token-dropdown/token-equality-fn';
import { emptyToken } from '../../../../token/interfaces/token.interface';
import { isDefined } from '../../../../utils/is-defined';
import { SwapRouteInfo } from '../swap-route-info/swap-route-info';
import { SwapRouteItem } from '../swap-route-item/swap-route-item';
import { SwapRouteStyles } from './swap-route.styles';

interface Props {
  inputAssets: AssetAmountInterface;
  outputAssets: AssetAmountInterface;
  trade: Trade;
  loadingHasFailed: boolean;
}

export const SwapRoute: FC<Props> = ({ inputAssets, outputAssets, trade, loadingHasFailed }) => {
  if (loadingHasFailed) {
    return <SwapRouteInfo text={'Exchange rate data loading has failed. \nReload this page or try again later.'} />;
  }

  if (tokenEqualityFn(inputAssets.asset, emptyToken) || tokenEqualityFn(outputAssets.asset, emptyToken)) {
    return <SwapRouteInfo text="Please, select tokens to swap" />;
  }

  if (!isDefined(inputAssets.amount) && !isDefined(outputAssets.amount)) {
    return <SwapRouteInfo text="Please, enter swap amount" />;
  }

  if (trade.length === 0) {
    return <SwapRouteInfo text="No quotes available" />;
  }

  return (
    <View style={SwapRouteStyles.container}>
      {trade.map((item, index) => {
        return (
          <SwapRouteItem
            key={`${index}_${item.dexType}_${item.aTokenSlug}_${item.bTokenSlug}`}
            tradeOperation={item}
            isShowNextArrow={index !== trade.length - 1}
          />
        );
      })}
    </View>
  );
};