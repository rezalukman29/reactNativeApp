import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { RootStackScreen } from './navigation/Navigator';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './components/Themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFlipper } from '@react-navigation/devtools';
import ThemeProvider from './theme/ThemeProvider';
import DrawerNavigator from './navigation/DrawerNavigator';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  const scheme = useColorScheme();

  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer
            ref={navigationRef}
            theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            {/* <RootStackScreen /> */}
            <DrawerNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
