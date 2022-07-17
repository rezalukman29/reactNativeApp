import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScaleAnimation } from '../animation/ScaleAnimation';

import Button from '../components/Button';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Loader from '../components/Loader';
import Page from '../components/Page';
import Spacer from '../components/atoms/Spacer';
import Text from '../components/Text';
import LinearGradient from 'react-native-linear-gradient';

const DetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Page>
      <Card>
        <Loader />
      </Card>
      <Spacer />
      <Card>
        <Text p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
          odio, iaculis id tempus id, egestas at ipsum. Nulla ullamcorper
          hendrerit arcu. In quis diam id felis finibus facilisis. Maecenas
          pretium quis lorem et molestie. Curabitur convallis, mi at laoreet
          semper, ante sapien vestibulum arcu, quis laoreet dui quam non tellus.
          Maecenas eget auctor nunc, quis auctor tellus. Donec nec orci sit amet
          quam dapibus fringilla. Maec

        </Text>
      </Card>
      <ScaleAnimation onPress={() => { }} disabled={false} scaleTo={0.92}>
        <View style={{ backgroundColor: 'red', width: 80, height: 50, padding: 12, borderRadius: 20 }}>
          <Text>Joss</Text>
        </View>
      </ScaleAnimation>

      <Button
        title="Go Back"
        style={styles.button}
        onPress={() => navigation.goBack()}
      />
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
      <Spacer />
    </Page>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 16,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
