import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { EntryAnimation } from '../animation/EntryAnimation';
import Spacer from '../components/atoms/Spacer';
import StyledText from '../components/atoms/text/Label';
import { DefaultHoc } from '../components/hoc/DefaultHOC';
import CategoryList from '../components/organism/category/CategoryList';
import HomeHeader from '../components/organism/HomeHeader';
import { RootStackParams } from '../navigation/AppTabNavigator';
import { FONTS, SIZES } from '../theme/config';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';

// type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>
interface Props extends NativeStackScreenProps<RootStackParams, 'HomeStack'> {
  category: any;
  fetchResources: () => void;
  updateLocation: (payload: any) => void;
  user: any;
  places: any
}

const HomeScreen = ({ navigation, category, fetchResources, updateLocation, user, places }: Props) => {

  const theme = useTheme();
  const style = useThemedStyles(styles);
console.log(category)
  React.useEffect(() => {
    const unsubscribe = fetchResources();
    return unsubscribe;
  }, [])

  const handleSearch = (payload: any) => {
    console.log(payload)
  }

  const handleToCategoryContent = (payload: any) => {
    navigation.push('CategoryContent', payload)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EntryAnimation index={0}>
          <HomeHeader onSearch={handleSearch} />
          <Spacer s />
          <CategoryList category={category} toCategoryContent={handleToCategoryContent} />
        </EntryAnimation>
      </ScrollView>
    </SafeAreaView >
  );
};

export default DefaultHoc(HomeScreen);

const styles = (theme: any) => StyleSheet.create({
  container: {}
});
