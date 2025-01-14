import React, { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { delegationApy } from '../../config/general';
import { useNetworkInfo } from '../../hooks/use-network-info.hook';
import { ScreensEnum } from '../../navigator/enums/screens.enum';
import { useNavigation } from '../../navigator/hooks/use-navigation.hook';
import { useSelectedBakerSelector } from '../../store/baking/baking-selectors';
import { TokenInterface } from '../../token/interfaces/token.interface';
import { Divider } from '../divider/divider';
import { useTokenScreenContentContainerStyles } from './token-screen-content-container.styles';

interface Props {
  showHistoryComponent: boolean;
  token: TokenInterface;
}

export const TokenHeader: FC<Props> = ({ showHistoryComponent, token }) => {
  const styles = useTokenScreenContentContainerStyles();
  const { navigate } = useNavigation();
  const [, isBakerSelected] = useSelectedBakerSelector();
  const isTezos = token.address === '';

  const { isTezosNode } = useNetworkInfo();

  if (showHistoryComponent && isTezos === true) {
    return isTezosNode ? (
      <TouchableOpacity style={styles.delegateContainer} onPress={() => navigate(ScreensEnum.Delegation)}>
        {isBakerSelected ? (
          <Text style={styles.delegateText}>Rewards & Redelegate</Text>
        ) : (
          <Text style={styles.delegateText}>
            Delegate: <Text style={styles.apyText}>{delegationApy}% APY</Text>
          </Text>
        )}
      </TouchableOpacity>
    ) : (
      <Divider />
    );
  }

  return <Text style={styles.headerText}>{showHistoryComponent ? 'History' : 'Info'}</Text>;
};
