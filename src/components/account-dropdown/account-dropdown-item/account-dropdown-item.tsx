import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { AccountInterface, emptyAccount } from '../../../interfaces/account.interface';
import { useTezosTokenSelector } from '../../../store/wallet/wallet-selectors';
import { formatSize } from '../../../styles/format-size';
import { conditionalStyle } from '../../../utils/conditional-style';
import { isDefined } from '../../../utils/is-defined';
import { getTruncatedProps } from '../../../utils/style.util';
import { AssetValueText } from '../../asset-value-text/asset-value-text';
import { DropdownListItemComponent } from '../../dropdown/dropdown';
import { HideBalance } from '../../hide-balance/hide-balance';
import { Icon } from '../../icon/icon';
import { IconNameEnum } from '../../icon/icon-name.enum';
import { RobotIcon } from '../../robot-icon/robot-icon';
import { WalletAddress } from '../../wallet-address/wallet-address';
import { AccountDropdownItemProps } from './account-dropdown-item.interface';
import { useAccountDropdownItemStyles } from './account-dropdown-item.styles';

export const AccountDropdownItem: FC<AccountDropdownItemProps> = ({
  account = emptyAccount,
  showFullData = true,
  actionIconName
}) => {
  const styles = useAccountDropdownItemStyles();
  const tezosToken = useTezosTokenSelector(account.publicKeyHash);

  return (
    <View style={styles.root}>
      <RobotIcon seed={account.publicKeyHash} />
      <View style={styles.infoContainer}>
        <View style={[styles.upperContainer, conditionalStyle(showFullData, styles.upperContainerFullData)]}>
          <Text {...getTruncatedProps(styles.name)}>{account.name}</Text>
          {isDefined(actionIconName) && <Icon name={actionIconName} size={formatSize(24)} />}
        </View>
        <View style={styles.lowerContainer}>
          <WalletAddress publicKeyHash={account.publicKeyHash} />
          {showFullData && (
            <HideBalance style={styles.balanceText}>
              <AssetValueText asset={tezosToken} amount={tezosToken.balance} />
            </HideBalance>
          )}
        </View>
      </View>
    </View>
  );
};

export const renderAccountListItem: DropdownListItemComponent<AccountInterface> = ({ item, isSelected }) => (
  <AccountDropdownItem account={item} {...(isSelected && { actionIconName: IconNameEnum.Check })} />
);
