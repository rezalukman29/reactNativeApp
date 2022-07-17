import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text } from 'react-native';
import BottomTabNavigator, { RootStackParams } from './AppTabNavigator';




const DrawerStack = createDrawerNavigator<RootStackParams>();

const DrawerNavigator = () => {
    return (
        <DrawerStack.Navigator screenOptions={{ headerShown: false }}>
            <DrawerStack.Screen name="Overview" component={BottomTabNavigator} options={{
                drawerLabel: "Overview"
            }} />
        </DrawerStack.Navigator>

    )
}

export default DrawerNavigator;