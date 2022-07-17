import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Back } from '../assets/svgIcon';
import Icon from '../components/atoms/icon';
import Spacer from '../components/atoms/Spacer';
import StyledText from '../components/atoms/text/Label';
import TopBackNavigation from '../components/molecules/header/TopBackNavigation';
import TopBackTransparent from '../components/molecules/header/TopBackTransparent';
import { DEFAULT_PHOTO, FONTS, height, SIZES, width } from '../theme/config';
import { IMG_DATA } from '../theme/dummy';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';

interface PlacePreviewProps { }

const PlacePreviewScreen = ({ route, navigation }: any) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const item = route.params.placeData;
  const [background, setBackground] = React.useState<string>(item.photo)

  const changeBackground = (uri: string) => {
    setBackground(uri)
  }


  return (
    <View style={style.container}>
      <Image
        source={{ uri: background ?? DEFAULT_PHOTO }}
        style={[StyleSheet.absoluteFillObject, { opacity: 1 }]}
      />
      <TopBackTransparent />
      <LinearGradient
        colors={['transparent', '#000']}
        style={style.infoWrapper}>
        <View style={{ alignSelf: 'flex-start', padding: 16, top: 20 }}>
          <StyledText size={42} color={"#ffffff"} weight={FONTS.pro}>{item.name}</StyledText>
          <View style={{height: 60}}>
            <ScrollView horizontal>
              {Array.isArray(IMG_DATA) && IMG_DATA.map((item: any, index: number) => {
                return (
                  <TouchableOpacity key={index} style={{ marginHorizontal: 6 }} onPress={() => changeBackground(item.uri)}>
                    <Image source={{ uri: item.uri }} style={{ width: 50, height: 50, borderRadius: 6,  }} />
                  </TouchableOpacity>
                )
              })
              }
            </ScrollView>
          </View>
          <View style={{ backgroundColor: theme?.colors.TRANS_WHITE, borderRadius: 12, padding: 12, width: width * .9, height: height / 6 }}>
            <ScrollView>
              <StyledText size={SIZES.small} color={"#ffffff"} weight={FONTS.light}>{item.description}</StyledText>
            </ScrollView>
          </View>
          <Spacer s />
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              underlayColor={theme?.colors.SECONDARY}
              style={{
                width: 120,
                padding: 6,
                borderRadius: 6,
                flexDirection: 'row'
              }}
              onPress={() => navigation.navigate("PlaceDetail", {
                placeData: item
              })}
            >
              <StyledText size={SIZES.small} color={"#ffffff"} weight={FONTS.bold}>More Details</StyledText>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={theme?.colors.SECONDARY}
              style={{
                width: 120,
                padding: 6,
                borderRadius: 6,
                flexDirection: 'row'
              }}
              onPress={() => { }}
            >
              <StyledText size={SIZES.small} color={"#ffffff"} weight={FONTS.bold}>Add Activity</StyledText>
            </TouchableHighlight>
          </View>

        </View>
      </LinearGradient>
    </View>
  );
};

export default PlacePreviewScreen;

const styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1
  },
  infoWrapper: {
    padding: 4,
    height: height / 2,
    position: 'absolute',
    width: width,
    top: height / 2,
    borderRadius: 6,
  },
});
