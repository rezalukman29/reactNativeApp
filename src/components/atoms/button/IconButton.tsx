import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ICON_NORMAL, ICON_SIZE } from '../../../theme/config';
import { ScaleAnimation } from '../../../animation/ScaleAnimation';

interface IconProps {
  uri: any;
  onPress: () => void;
  profilePicture?: boolean;
}

const IconButton = ({ uri, onPress, profilePicture }: IconProps) => {
  return (
    <ScaleAnimation onPress={onPress} disabled={false} scaleTo={0.90} >
      <View >
        {profilePicture ? <Image source={uri} style={styles.imageProfile} /> : <Image source={uri} style={styles.image} />}
      </View>
    </ScaleAnimation>
  );
};

export default IconButton;

const styles = StyleSheet.create({

  image: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain'
  },
  imageProfile: {
    width: ICON_SIZE * 1.3,
    height: ICON_SIZE * 1.3,
    resizeMode: 'contain'
  }
});
