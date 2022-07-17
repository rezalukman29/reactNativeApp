import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';

interface ExploreScreenProps {}

const ExploreScreen = (props: ExploreScreenProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
  return (
    <SafeAreaView style={style.container}>
      <Text>ExploreScreen</Text>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {}
});
