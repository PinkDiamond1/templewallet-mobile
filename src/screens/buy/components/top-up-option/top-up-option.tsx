import React, { FC } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

import { Divider } from '../../../../components/divider/divider';
import { Icon } from '../../../../components/icon/icon';
import { IconNameEnum } from '../../../../components/icon/icon-name.enum';
import { WhiteContainer } from '../../../../components/white-container/white-container';
import { formatSize } from '../../../../styles/format-size';
import { useColors } from '../../../../styles/use-colors';
import { showErrorToast } from '../../../../toast/toast.utils';
import { isDefined } from '../../../../utils/is-defined';
import { useTopUpOptionStyles } from './top-up-option.styles';

const TEMPORARILY_UNAVAILABLE_MESSAGE = 'Sorry, service is temporarily unavailable. Try again later!';

interface Props {
  title: string;
  iconName?: IconNameEnum;
  imageSource?: ImageSourcePropType;
  disabled?: boolean;
  isError?: boolean;
  onPress?: () => void;
}

export const TopUpOption: FC<Props> = ({ title, iconName, imageSource, disabled, isError, onPress }) => {
  const styles = useTopUpOptionStyles();
  const colors = useColors();

  const handlePress = () => {
    if (isDefined(disabled) && disabled) {
      isDefined(isError) && isError && showErrorToast({ description: TEMPORARILY_UNAVAILABLE_MESSAGE });
    } else {
      isDefined(onPress) && onPress();
    }
  };

  return (
    <>
      <WhiteContainer>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.providerLogo}>
            {isDefined(iconName) && (
              <Icon name={iconName} width={formatSize(160)} height={formatSize(40)} color={colors.black} />
            )}
            {isDefined(imageSource) && <Image source={imageSource} style={styles.pngImage} />}
          </View>
          <View style={styles.divider} />
          <View style={styles.textContainer}>
            <Text style={[styles.actionsContainer, isDefined(disabled) && disabled && styles.disabled]}>{title}</Text>
          </View>
        </TouchableOpacity>
      </WhiteContainer>
      <Divider size={formatSize(16)} />
    </>
  );
};
