import * as React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { FC, memo, useCallback, useMemo, useRef, useState } from "react";
import {
  FlatList,
  FlatListProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  Text,
  useWindowDimensions,
  Image,
  ImageBackground,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import TabBar from "./PlaceDetail/components/TabBar";
import useScrollSync from "./PlaceDetail/hooks/useScrollSync";
import ConnectionList from "./PlaceDetail/components/ConnectionList";
import { Connection } from "./PlaceDetail/types/Connection";
import { ScrollPair } from "./PlaceDetail/types/ScrollPair";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FRIENDS, SUGGESTIONS } from "./PlaceDetail/mocks/connections";
import { HeaderConfig } from "./PlaceDetail/types/HeaderConfig";
import { Visibility } from "./PlaceDetail/types/Visibility";
import HeaderOverlay from "./PlaceDetail/components/HeaderOverlay";


const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = 48;

const OVERLAY_VISIBILITY_OFFSET = 32;

const Tab = createMaterialTopTabNavigator();
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';
import { DEFAULT_PHOTO, FONTS, height, SIZES, width } from '../theme/config';
import PlacesInfo from './PlaceDetail/components/PlacesInfo';
import { RootStackParams } from '../navigation/AppTabNavigator';
import InfoIcon from '../assets/icons/InfoIcon';
import ActivityIcon from '../assets/icons/ActivityIcon';
import GalleryIcon from '../assets/icons/GalleryIcon';
import StyledText from '../components/atoms/text/Label';
import Header from './PlaceDetail/components/Header';



type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>
const PlaceDetailScreen: React.FC<Props> = ({ route, navigation }: any) => {
  const [swipeEnabled, SetSwipeEnabled] = React.useState<boolean>(false)
  const item = route.params.placeData
  console.log([item])

  const theme = useTheme();
  const style = useThemedStyles(styles);

  const { top, bottom } = useSafeAreaInsets();

  const { height: screenHeight } = useWindowDimensions();

  const friendsRef = useRef<FlatList>(null);
  const suggestionsRef = useRef<FlatList>(null);

  const [tabIndex, setTabIndex] = useState(0);

  const [headerHeight, setHeaderHeight] = useState(0);

  const defaultHeaderHeight = top + HEADER_HEIGHT;

  const headerConfig = useMemo<HeaderConfig>(
    () => ({
      heightCollapsed: defaultHeaderHeight,
      heightExpanded: headerHeight,
    }),
    [defaultHeaderHeight, headerHeight]
  );

  const { heightCollapsed, heightExpanded } = headerConfig;

  const headerDiff = heightExpanded - heightCollapsed;

  const rendered = headerHeight > 0;

  const handleHeaderLayout = useCallback<NonNullable<ViewProps["onLayout"]>>(
    (event) => setHeaderHeight(event.nativeEvent.layout.height),
    []
  );

  const friendsScrollValue = useSharedValue(0);

  const friendsScrollHandler = useAnimatedScrollHandler(
    (event) => (friendsScrollValue.value = event.contentOffset.y)
  );

  const suggestionsScrollValue = useSharedValue(0);

  const suggestionsScrollHandler = useAnimatedScrollHandler(
    (event) => (suggestionsScrollValue.value = event.contentOffset.y)
  );

  const scrollPairs = useMemo<ScrollPair[]>(
    () => [
      { list: friendsRef, position: friendsScrollValue },
      { list: suggestionsRef, position: suggestionsScrollValue },
    ],
    [friendsRef, friendsScrollValue, suggestionsRef, suggestionsScrollValue]
  );

  const { sync } = useScrollSync(scrollPairs, headerConfig);

  const сurrentScrollValue = useDerivedValue(
    () =>
      tabIndex === 0 ? friendsScrollValue.value : suggestionsScrollValue.value,
    [tabIndex, friendsScrollValue, suggestionsScrollValue]
  );

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerDiff)
  );

  const tabBarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(
      translateY.value,
      [-headerDiff, 0],
      [Visibility.Hidden, Visibility.Visible]
    ),
  }));

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      paddingTop: rendered ? headerHeight + TAB_BAR_HEIGHT : 0,
      paddingBottom: bottom,
      minHeight: screenHeight + headerDiff,
    }),
    [rendered, headerHeight, bottom, screenHeight, headerDiff]
  );

  const sharedProps = useMemo<Partial<FlatListProps<Connection>>>(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      onScrollEndDrag: sync,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: { top: heightExpanded },
    }),
    [contentContainerStyle, sync, heightExpanded]
  );

  const renderInfo = useCallback(
    () => (
      <PlacesInfo
        ref={friendsRef}
        data={[item]}
        onScroll={friendsScrollHandler}
        {...sharedProps}
      />
    ),
    [friendsRef, friendsScrollHandler, sharedProps]
  );

  const renderSuggestions = useCallback(
    () => (
      <ConnectionList
        ref={suggestionsRef}
        data={SUGGESTIONS}
        onScroll={suggestionsScrollHandler}
        {...sharedProps}
      />
    ),
    [suggestionsRef, suggestionsScrollHandler, sharedProps]
  );

  const tabBarStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? style.tabBarContainer : undefined,
      { top: rendered ? headerHeight : undefined },
      tabBarAnimatedStyle,
    ],
    [rendered, headerHeight, tabBarAnimatedStyle]
  );

  const renderTabBar = useCallback<
    (props: MaterialTopTabBarProps) => React.ReactElement
  >(
    (props) => (
      <Animated.View style={tabBarStyle}>
        <TabBar onIndexChange={setTabIndex} {...props} />
      </Animated.View>
    ),
    [tabBarStyle]
  );

  const headerContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      rendered ? style.headerContainer : undefined,
      { paddingTop: top },
      headerAnimatedStyle,
    ],

    [rendered, top, headerAnimatedStyle]
  );

  const collapsedOverlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [-headerDiff, OVERLAY_VISIBILITY_OFFSET - headerDiff, 0],
      [Visibility.Visible, Visibility.Hidden, Visibility.Hidden]
    ),
  }));

  const collapsedOverlayStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      style.collapsedOvarlay,
      collapsedOverlayAnimatedStyle,
      { height: heightCollapsed, paddingTop: top },
    ],
    [collapsedOverlayAnimatedStyle, heightCollapsed, top]
  );
  return (
    <View style={style.container}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        {/* <Header
          name={item.name}
          bio={item.city}
          photo={item.photo}
        /> */}
        <ImageBackground style={{width: width, height: height / 4}} source={{ uri: item.photo ?? DEFAULT_PHOTO }} >
        </ImageBackground>
      </Animated.View>

      <Animated.View style={collapsedOverlayStyle}>
        <HeaderOverlay name={item.name} />
      </Animated.View>
      <Tab.Navigator tabBar={renderTabBar}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarLabelStyle: { fontSize: 14, },
          tabBarStyle: {
            backgroundColor: theme?.colors.BACKGROUND,
            elevation: 0,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 10 }, // change this for more shadow
            shadowOpacity: 0.4,
            shadowRadius: 6
          },
          tabBarActiveTintColor: theme?.colors.PRIMARY,
          tabBarInactiveTintColor: theme?.colors.DISABLED,
          tabBarIndicatorStyle: {
            backgroundColor: theme?.colors.PRIMARY,
            height: 3,
          },
          swipeEnabled: swipeEnabled

        }}
      >
        <Tab.Screen name="Info"
          options={{
            tabBarIcon: ({ focused }: any) =>
              focused ? (
                <View style={{ flexDirection: 'row', marginLeft: -20, width: width / 3,alignItems: 'center' }}>
                  <InfoIcon color={theme?.colors.PRIMARY} size={20} />
                  <View style={{ marginLeft: 4 }}>
                    <StyledText size={SIZES.small} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>Info</StyledText>
                  </View>
                </View>
              ) : (
                <InfoIcon color={theme?.colors.DISABLED} size={20} />
              ),
          }}
        >{renderInfo}</Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }: any) =>
              focused ? (
                <View style={{ flexDirection: 'row', marginLeft: -30, width: width / 3,alignItems: 'center' }}>
                  <ActivityIcon color={theme?.colors.PRIMARY} size={20} />
                  <View style={{ marginLeft: 4 }}>
                    <StyledText size={SIZES.small} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>Review</StyledText>
                  </View>

                </View>
              ) : (
                <ActivityIcon color={theme?.colors.DISABLED} size={20} />
              ),
          }}
          name="Review">{renderSuggestions}</Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }: any) =>
              focused ? (
                <View style={{ flexDirection: 'row', marginLeft: -24, width: width / 3,alignItems: 'center' }}>
                  <GalleryIcon color={theme?.colors.PRIMARY} size={20} />
                  <View style={{ marginLeft: 4 }}>
                    <StyledText size={SIZES.small} color={theme?.colors.PRIMARY} weight={FONTS.semiBold}>Gallery</StyledText>
                  </View>
                </View>

              ) : (
                <GalleryIcon color={theme?.colors.DISABLED} size={20} />
              ),
          }}
          name="Gallery">{renderSuggestions}</Tab.Screen>
      </Tab.Navigator> 
    </View>
  );
};

export default PlaceDetailScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabBarContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
  overlayName: {
    fontSize: 24,
  },
  collapsedOvarlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    justifyContent: "center",
    zIndex: 2,
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
});
