import { StackNavigationOptions } from '@react-navigation/stack';

import { formatSize } from '../../styles/format-size';
import { generateShadow } from '../../styles/generate-shadow';
import { useColors } from '../../styles/use-colors';

export const useStackNavigatorStyleOptions = (): StackNavigationOptions => {
  const colors = useColors();

  return {
    headerStyle: {
      ...generateShadow(1, colors.lines),
      backgroundColor: colors.navigation,
      borderBottomWidth: formatSize(0.5),
      borderBottomColor: colors.lines
    },
    headerTitleStyle: { color: colors.black },
    cardStyle: { backgroundColor: colors.pageBG }
  };
};
