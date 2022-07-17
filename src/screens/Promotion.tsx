import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';

interface PromotionScreenProps {}

const PromotionScreen = (props: PromotionScreenProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text>PromotionScreen</Text>
    </View>
  );
};

export default PromotionScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {}
});
