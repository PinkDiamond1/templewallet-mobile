import React, { FC, useState } from 'react';
import { ListRenderItemInfo, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Divider } from '../../../components/divider/divider';
import { Icon } from '../../../components/icon/icon';
import { IconNameEnum } from '../../../components/icon/icon-name.enum';
import { CustomDAppInfo } from '../../../interfaces/custom-dapps-info.interface';
import { formatSize } from '../../../styles/format-size';
import { openUrl } from '../../../utils/linking.util';
import { getTruncatedProps } from '../../../utils/style.util';
import { useOthersDAppStyles } from './others.styles';

interface Props {
  item: ListRenderItemInfo<CustomDAppInfo>;
}

export const OthersDApp: FC<Props> = ({ item }) => {
  const styles = useOthersDAppStyles();
  const [imageLoadError, setImageLoadError] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => openUrl(item.item.dappUrl)}>
      {imageLoadError ? (
        <Icon name={IconNameEnum.NoNameToken} size={formatSize(24)} style={styles.logo} />
      ) : (
        <FastImage style={styles.logo} source={{ uri: item.item.logo }} onError={() => setImageLoadError(true)} />
      )}
      <Divider size={formatSize(8)} />
      <Text {...getTruncatedProps(styles.text)}>{item.item.name}</Text>
    </TouchableOpacity>
  );
};
