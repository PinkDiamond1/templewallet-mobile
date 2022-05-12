import React, { FC } from 'react';

import { delegationApy } from '../../../../config/general';
import { ScreensEnum } from '../../../../navigator/enums/screens.enum';
import { useNavigation } from '../../../../navigator/hooks/use-navigation.hook';
import { useTezosTokenSelector } from '../../../../store/wallet/wallet-selectors';
import { TokenListItem } from './token-list-item';

export const TezosToken: FC = () => {
  const tezosToken = useTezosTokenSelector();
  const { navigate } = useNavigation();

  return (
    <TokenListItem token={tezosToken} apy={delegationApy} onPress={() => navigate(ScreensEnum.TezosTokenScreen)} />
  );
};