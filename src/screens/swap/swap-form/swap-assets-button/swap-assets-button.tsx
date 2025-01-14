import { useFormikContext } from 'formik';
import React, { FC, useCallback } from 'react';
import { View } from 'react-native';

import { AssetAmountInterface } from '../../../../components/asset-amount-input/asset-amount-input';
import { IconNameEnum } from '../../../../components/icon/icon-name.enum';
import { TouchableIcon } from '../../../../components/icon/touchable-icon/touchable-icon';
import { SwapFormValues } from '../../../../interfaces/swap-asset.interface';
import { formatSize } from '../../../../styles/format-size';
import { SwapAssetsButtonStyles } from './swap-assets-button.styles';

export const SwapAssetsButton: FC = () => {
  const { values, setValues } = useFormikContext<SwapFormValues>();
  const { inputAssets, outputAssets } = values;

  const swapAction = useCallback(
    (inputAsset: AssetAmountInterface, outputAsset: AssetAmountInterface) => {
      setValues({
        inputAssets: { asset: outputAsset.asset, amount: undefined },
        outputAssets: { asset: inputAsset.asset, amount: undefined }
      });
    },
    [inputAssets, outputAssets]
  );

  return (
    <View style={SwapAssetsButtonStyles.container}>
      <TouchableIcon
        onPress={() => swapAction(inputAssets, outputAssets)}
        name={IconNameEnum.SwapArrow}
        size={formatSize(24)}
      />
    </View>
  );
};
