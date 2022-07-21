import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../components/atoms/input';
import StyledText from '../components/atoms/text/Label';
import TopBackNavigation from '../components/molecules/header/TopBackNavigation';
import TopBackTransparent from '../components/molecules/header/TopBackTransparent';
import { SIZES, SPACING, width } from '../theme/config';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';
// import Text from '../components/Text';
// import Spacer from '../components/Spacer';
// import Page from '../components/Page';

const LoginScreen = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [errorPassword, setErrorPassword] = useState<string | null>(null)
  return (
    <>
      {/* <SafeAreaView>
        <TopBackNavigation />
      </SafeAreaView> */}
      <SafeAreaView style={style.container}>
        <StyledText size={SIZES.large} color={theme?.colors.PRIMARY}>Login</StyledText>

        <TextField
          style={style.textField}
          value={value}
          label="Email"
          errorText={error}
          onChangeText={(text) => setValue(text)}
        />

        <TextField
          style={style.textField}
          value={password}
          label="Password"
          errorText={errorPassword}
          onChangeText={(text) => setValue(text)}
        />
        <Button
          title="Set error"
          onPress={() => setError('This field is required.')}
        />

        <Button
          title="clear"
          onPress={() => setError(null)}
        />

      </SafeAreaView>
    </>

  );
};

export default LoginScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.BACKGROUND,
    justifyContent: 'center',
    width: width
  },
  textField: {
    margin: SPACING,
  },
});

