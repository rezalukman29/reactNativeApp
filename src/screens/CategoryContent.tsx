import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/atoms/Spacer';
import { DefaultHoc } from '../components/hoc/DefaultHOC';
import TopBackNavigation from '../components/molecules/header/TopBackNavigation';
import CategoryPiilz from '../components/organism/category/CategoryPiilz';
import PlacesByCategory from '../components/organism/places/PlacesByCategory';
import { RootStackParams } from '../navigation/AppTabNavigator';
import { PADDING } from '../theme/config';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';

interface CategoryContentProps { }
type Props = NativeStackNavigationProp<RootStackParams, 'CategoryContent'>

const CategoryContentScreen = ({ route, navigation, category, fetchPlaces, places }: any) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  // let title: any = category?.category?.filter((item: any) => item.id === selectedCategory)
  useEffect(() => {
    setSelectedCategory(route.params.categoryId);
  }, []);

  useEffect(() => {
    const unsubscribe = fetchPlaces();
    return unsubscribe;
  }, [])

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  }

  const handleToPlacePreview = (data: any) => {
    navigation.navigate('PlacePreview', { placeData: data })
  }


  return (
    <SafeAreaView style={style.container}>
      <TopBackNavigation
        title={'Places by Category'}
      />
      <CategoryPiilz
        category={category.category}
        selected={selectedCategory}
        changeCategory={handleSelectCategory}
      />
      <Spacer s/>
      <PlacesByCategory
        data={places.placesData}
        isLoading={places.isLoadingPlaces}
        toPlaceDetail={handleToPlacePreview}
      />

    </SafeAreaView>
  );
};

export default DefaultHoc(CategoryContentScreen);


const styles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme?.colors.BACKGROUND,
  }
});
