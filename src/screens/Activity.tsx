import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';

interface ActivityScreenProps {}

const ActivityScreen = (props: ActivityScreenProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text>ActivityScreen</Text>
    </View>
  );
};

export default ActivityScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {}
});
