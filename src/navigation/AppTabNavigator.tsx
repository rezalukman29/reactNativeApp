import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedTabBarNavigator, DotSize, TabElementDisplayOptions } from 'react-native-animated-nav-tab-bar'
import { enableScreens } from 'react-native-screens';
import ActivityIcon from '../assets/icons/ActivityIcon';
import ExploreIcon from '../assets/icons/ExploreIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import ActivityScreen from '../screens/Activity';
import CategoryContent from '../screens/CategoryContent';
import ExploreScreen from '../screens/Explore';
import HomeScreen from '../screens/Home';
import PlaceDetailScreen from '../screens/PlaceDetail';
import PlacePreviewScreen from '../screens/PlacePreview';
import PromotionScreen from '../screens/Promotion';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';


enableScreens();

export type RootStackParams = {
    Overview: undefined;
    HomeStack: undefined;
    ExploreStack: undefined;
    ActivityStack: undefined;
    PromotionStack: undefined;
    CategoryContent: {
        categoryId: string
    };
    PlaceDetail: {
        placeData: any
    }
    PlacePreview: {
        placeData: any
    }
}

export type HomeStackParams = {
    HomeTabs: undefined;
    CategoryContent: {
        categoryId: string
    };
    PlaceDetail: {
        placeData: any
    },
    PlacePreview: {
        placeData: any
    }
}
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const HomeScreenStack = ({ navigation, route }: any) => {
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = ["PlaceDetail", "CategoryContent","PlacePreview"];

        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarVisible: false });
        } else {
            navigation.setOptions({ tabBarVisible: true });
        }
    }, [navigation, route]);
    return (
        <HomeStack.Navigator initialRouteName='HomeTabs' screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="HomeTabs" component={HomeScreen} />
            <HomeStack.Screen name="CategoryContent" component={CategoryContent} />
            <HomeStack.Screen name="PlacePreview" component={PlacePreviewScreen} />
            <HomeStack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
            {/* <FeedStack.Screen name="Place" component={PlaceScreen} />

        <FeedStack.Screen name="PlaceDetail" component={PlaceDetailScreen} initialParams={{ placeData: {} }} options={({ navigation }) => ({
          tabBarStyle: {display: 'none'}
        })} /> */}
        </HomeStack.Navigator>
    )
}

export type ExploreStackParams = {
    ExploreTabs: undefined;
}
const ExploreStack = createNativeStackNavigator<ExploreStackParams>();
const ExploreScreenStack = ({ navigation, route }: any) => {
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = [""];
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarVisible: false });
        } else {
            navigation.setOptions({ tabBarVisible: true });
        }
    }, [navigation, route]);
    return (
        <ExploreStack.Navigator initialRouteName='ExploreTabs' screenOptions={{
            headerShown: false
        }}>
            <ExploreStack.Screen name="ExploreTabs" component={ExploreScreen} />
            {/* <FeedStack.Screen name="Place" component={PlaceScreen} />
        <FeedStack.Screen name="CategoryContent" component={CategoryContentScreen} />
        <FeedStack.Screen name="PlaceDetail" component={PlaceDetailScreen} initialParams={{ placeData: {} }} options={({ navigation }) => ({
          tabBarStyle: {display: 'none'}
        })} /> */}
        </ExploreStack.Navigator>
    )
}

export type ActivityStackParams = {
    ActivityTabs: undefined;
}
const ActivityStack = createNativeStackNavigator<ActivityStackParams>();
const ActivityScreenStack = ({ navigation, route }: any) => {
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = [""];
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarVisible: false });
        } else {
            navigation.setOptions({ tabBarVisible: true });
        }
    }, [navigation, route]);
    return (
        <ActivityStack.Navigator initialRouteName='ActivityTabs' screenOptions={{
            headerShown: false
        }}>
            <ActivityStack.Screen name="ActivityTabs" component={ActivityScreen} />
            {/* <FeedStack.Screen name="Place" component={PlaceScreen} />
        <FeedStack.Screen name="CategoryContent" component={CategoryContentScreen} />
        <FeedStack.Screen name="PlaceDetail" component={PlaceDetailScreen} initialParams={{ placeData: {} }} options={({ navigation }) => ({
          tabBarStyle: {display: 'none'}
        })} /> */}
        </ActivityStack.Navigator>
    )
}

export type PromotionStackParams = {
    PromotionTabs: undefined;
}
const PromotionStack = createNativeStackNavigator<PromotionStackParams>();
const PromotionScreenStack = ({ navigation, route }: any) => {
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = [""];
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarVisible: false });
        } else {
            navigation.setOptions({ tabBarVisible: true });
        }
    }, [navigation, route]);
    return (
        <PromotionStack.Navigator initialRouteName='PromotionTabs' screenOptions={{
            headerShown: false
        }}>
            <PromotionStack.Screen name="PromotionTabs" component={PromotionScreen} />
            {/* <FeedStack.Screen name="Place" component={PlaceScreen} />
        <FeedStack.Screen name="CategoryContent" component={CategoryContentScreen} />
        <FeedStack.Screen name="PlaceDetail" component={PlaceDetailScreen} initialParams={{ placeData: {} }} options={({ navigation }) => ({
          tabBarStyle: {display: 'none'}
        })} /> */}
        </PromotionStack.Navigator>
    )
}

const Tabs = AnimatedTabBarNavigator()

export default function BottomTabNavigator() {
    const theme = useTheme();
    const style = useThemedStyles(styles);
    return (
        <Tabs.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: theme?.colors.PRIMARY,
                inactiveTintColor: theme?.colors.DISABLED,
                activeBackgroundColor: theme?.colors.SECONDARY,
            }}
            appearance={{
                shadow: true,
                floating: true,
                whenActiveShow: TabElementDisplayOptions.BOTH,
                dotSize: DotSize.SMALL,
                tabBarBackground: theme?.colors.BACKGROUND
            }}

        >
            <Tabs.Screen
                name="Home"
                component={HomeScreenStack}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <HomeIcon color={color} size={22} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Explore"
                component={ExploreScreenStack}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <ExploreIcon color={color} size={22} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Activity"
                component={ActivityScreenStack}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <ProfileIcon color={color} size={22} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Promo"
                component={PromotionScreenStack}
                options={{
                    tabBarIcon: ({ focused, color, size }: any) => (
                        <ActivityIcon color={color} size={22} />
                    ),
                }}
            />
        </Tabs.Navigator>

    );

}

const styles = (theme: any) => StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
    }
});
