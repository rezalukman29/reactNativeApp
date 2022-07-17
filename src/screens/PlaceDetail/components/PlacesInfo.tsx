import React, { forwardRef, memo, useCallback } from "react";
import {
  FlatList,
  FlatListProps,
  Image,
  ListRenderItem,
  StyleSheet, Text, TouchableHighlight
} from "react-native";
import Animated from "react-native-reanimated";
import ConnectionItem from "./ConnectionItem";
import { Connection } from "../types/Connection";
import { View } from "react-native-animatable";
import useTheme from "../../../theme/useTheme";
import useThemedStyles from "../../../theme/useThemedStyles";
import { FONTS, ICON_BUTTON, PADDING, SHADOWS, SIZES, SPACING, SPACING_HALF, width, WIDTH_BOX } from "../../../theme/config";
import { ScrollView } from "react-native-gesture-handler";
import { getRandomLightColor } from "../../../utils/function";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import StyledText from "../../../components/atoms/text/Label";
import StarIcon from "../../../assets/icons/StarIcon";
import { EntryAnimation } from "../../../animation/EntryAnimation";
import ActivityIcon from "../../../assets/icons/ActivityIcon";
import Spacer from "../../../components/atoms/Spacer";
import BackSecondaryIcon from "../../../assets/icons/BackSecondaryIcon";
import { useNavigation } from "@react-navigation/native";


export const AnimatedFlatList: typeof FlatList = Animated.createAnimatedComponent(
  FlatList,
);

interface PlacesInfoProps {
  item: any,
}

type Props = Omit<FlatListProps<Connection>, "renderItem">;

const PlacesInfo = forwardRef<FlatList, Props>((props, ref) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = useCallback<ListRenderItem<Connection>>(
    ({ item }) => <RenderPlacesInfo item={item} />,
    []
  );

  const RenderPlacesInfo = ({ item }: PlacesInfoProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
    return (
      <View>
        <Spacer s />
        {/* Header */}
        <View style={{ paddingHorizontal: SPACING }}>
          <EntryAnimation index={0}>
            <View style={style.header}>
              <View>
                <View style={style.category}>
                  <StyledText size={SIZES.small} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>ENTERTAINMENT</StyledText>
                </View>
              </View>

              <View style={style.rating}>
                <View style={{ paddingHorizontal: 4 }}>
                  <StyledText size={SIZES.extraLarge} color={theme?.colors.PRIMARY} weight={FONTS.light}>4.8</StyledText>
                </View>

                <StarIcon color={'#FFD700'} size={24} />
                <TouchableHighlight
                  underlayColor={theme?.colors.SECONDARY}
                  style={style.backButton}
                  onPress={() => {
                    navigation.goBack()
                  }}>
                  <BackSecondaryIcon color={theme?.colors.PRIMARY} size={ICON_BUTTON} />
                </TouchableHighlight>


              </View>
            </View>
          </EntryAnimation>

          {/* Sub Header */}
          <EntryAnimation index={1}>
            <View style={{ flexDirection: 'row', paddingVertical: SPACING_HALF, width: width * .85, alignItems: 'center' }}>
              <ActivityIcon size={28} color={theme?.colors.PRIMARY} />
              <StyledText size={SIZES.small} color={theme?.colors.TEXT} weight={FONTS.light}>{item.address}</StyledText>
            </View>
          </EntryAnimation>

          {/* Description */}
          <EntryAnimation index={2}>
            <View style={{ flexDirection: 'column', paddingVertical: SPACING_HALF, width: width - SPACING * 2 }}>
              <StyledText size={SIZES.large} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>Description</StyledText>
              <StyledText size={SIZES.small} color={theme?.colors.TEXT} weight={FONTS.regular}>{item.description}</StyledText>
            </View>
          </EntryAnimation>

          {/* Reference */}
          <EntryAnimation index={3}>
            <View style={{ flexDirection: 'column', paddingVertical: SPACING_HALF, width: width - SPACING * 2, }}>
              <StyledText size={SIZES.large} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>Reference</StyledText>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  item.types.split(', ').map((item: any, index: number) => {
                    return (
                      <View key={index} style={{ backgroundColor: getRandomLightColor(), marginRight: 8, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, elevation: 2, marginVertical: 6, marginHorizontal: 4 }}>
                        <StyledText size={SIZES.small} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>{item}</StyledText>
                      </View>

                    )
                  })
                }
              </ScrollView>
            </View>
          </EntryAnimation>
        </View>

        {/* Location */}
        {/* <EntryAnimation index={4}>
          <View style={{ width: width, height: width * 0.66, paddingBottom: 8 }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ flex: 1 }}
              region={{
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude),
                latitudeDelta: 0.022,
                longitudeDelta: 0.021,
              }}
            >
              <Marker
                coordinate={{ latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude) }}
                pinColor={theme?.colors.PRIMARY} // any color
                title={item.name}

              >
              </Marker>
            </MapView>
          </View>
        </EntryAnimation> */}
        <View style={{ flexDirection: 'column', padding: SPACING }}>
          <StyledText size={SIZES.large} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>Nearby Places</StyledText>
        </View>
        {/* <TopCulinairy /> */}
        {/* <TopCulinairy /> */}
      </View>
    );
  };

  return (
    <AnimatedFlatList
      ref={ref}
      style={style.container}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      {...props}
    />
  );
});

const styles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: SPACING_HALF
  },
  category: {
    padding: 6,
    backgroundColor: theme.colors.SECONDARY,
    borderRadius: 4,
    elevation: 2
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF50',
  }
});

export default memo(PlacesInfo);
