import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../components/atoms/input';
import StyledText from '../components/atoms/text/Label';
import TopBackNavigation from '../components/molecules/header/TopBackNavigation';
import TopBackTransparent from '../components/molecules/header/TopBackTransparent';
import { FONTS, height, SIZES, SPACING, width } from '../theme/config';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';
import { useForm, Controller } from 'react-hook-form'
import StyledButton from '../components/atoms/button';
import images from '../assets/old';
import Spacer from '../components/atoms/Spacer';
import { EntryAnimation } from '../animation/EntryAnimation';
import { useDispatch } from 'react-redux';
import { formLoginRequest } from '../store/user/userActions';
// import Text from '../components/Text';
// import Spacer from '../components/Spacer';
// import Page from '../components/Page';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const dispatch = useDispatch();
  // const [value, setValue] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>({
    email: "",
    password: ""
  })

  const {
    control,
    handleSubmit,
  } = useForm<any>();

  const onSubmit = async (data: any) => {

    if (data.email === "" && data.password === "") {
      setError({ ...error, email: 'Email is required', password: 'Password is required' })
      return
    }
    if (data.password === "") {
      setError({ ...error, password: 'Password is required', email: "" })
      return
    }
    try {
      setLoading(true)
      let response: any = await dispatch(formLoginRequest(data))
      console.log("resp :", response)
      if (!response.success) {
        setError({ ...error, email: response.message, password: "" })
      } else {
        setError({ ...error, email: "" })
        response.data.password === data.password ? loginSuccess(response.data) : setError({ ...error, password: "Wrong password", email: "" })
      }
      setLoading(false)
    } catch (error: any) {
      console.log(error)
    }
  }

  const loginSuccess = (payload: any) => {
    setError({ ...error, email: "",password: "" })
    dispatch(loginSuccess(payload));
    console.log("JOSS")
    navigation.navigate('HomeTabs');
  }



  return (
    <>
      {/* <SafeAreaView>
        <TopBackNavigation />
      </SafeAreaView> */}
      <SafeAreaView style={style.container}>
        <Spacer static />
        <EntryAnimation index={0}>
          <Image source={theme?.isLightTheme ? images.WanderDark
            : images.WanderDark
          } style={{ width: 200, height: 60, resizeMode: 'stretch' }} />
        </EntryAnimation>
        <Spacer static />
        <EntryAnimation index={1}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                style={style.textField}
                value={value}
                label="Email"
                errorText={error.email}
                onChangeText={(text) => onChange(text)}
                static
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                style={style.textField}
                value={value}
                label="Password"
                errorText={error.password}
                onChangeText={(text) => onChange(text)}
                static
              />
            )}
          />
        </EntryAnimation>

        <EntryAnimation index={2}>
          <StyledButton
            title="Login"
            onPress={handleSubmit(onSubmit)}
            // isLoading={loading}
          />
          <Spacer s static />
          <Pressable onPress={() => navigation.goBack()}>
            <StyledText size={SIZES.medium} color='#ffffff' weight={FONTS.semiBold}>Register</StyledText>
          </Pressable>
          {/* <Button
            title="Register"
            onPress={() => setError('This field is required.')}
          /> */}

          {/* <Button
            title="clear"
            onPress={() => setError(null)}
          /> */}
        </EntryAnimation>
      </SafeAreaView>
      <Image source={images.Teenager} style={{
        height: 400,
        width: width,
        resizeMode: 'stretch',
        position: 'absolute',
        alignSelf: 'center',
        top: height / 1.9,
        zIndex: 3
      }} />

    </>

  );
};

export default LoginScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.ROOT,
    width: width,
    zIndex: 2
  },
  textField: {
    marginBottom: SPACING,
  },
});

