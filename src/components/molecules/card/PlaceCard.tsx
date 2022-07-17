import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { COLORS, DEFAULT_PHOTO, FONTS, PLACES_CARD_HEIGHT, PLACES_CARD_WIDTH, SHADOWS, SIZES } from '../../../theme/config';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import { EntryAnimation } from '../../../animation/EntryAnimation';
import StyledText from '../../atoms/text/Label';


interface PlaceCardProps {
  item: any,
  index: number,
  toPlaceDetail: (data: any) => void;
}



const PlaceCard = ({ item, index, toPlaceDetail }: PlaceCardProps) => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <EntryAnimation index={index}>
      <TouchableHighlight style={[style.container, { top: index % 2 == 0 ? 0 : PLACES_CARD_HEIGHT / 6 }]} key={item.id} onPress={() => toPlaceDetail(item)}>
        {/* <View style={style.imageStyle}> */}
        <ImageBackground source={{ uri: item.photo ? item.photo : DEFAULT_PHOTO }}
          style={style.imageStyle}
          imageStyle={{
            borderRadius: 6,
          }}>
          <LinearGradient
            // Button Linear Gradient
            colors={['transparent', '#000']}
            style={style.infoWrapper}>
            <View style={style.infoArea}>
              <StyledText size={SIZES.small} weight={FONTS.regular} color={'#fff'}>{item.name.length < 24 ? item.name : item.name.substring(0, 23) + ' ...'}</StyledText>
              <StyledText size={SIZES.base} weight={FONTS.light} color={'#fff'}>{item.city.length < 24 ? item.city : item.city.substring(0, 23) + ' ...'}</StyledText>
            </View>
          </LinearGradient>
        </ImageBackground>
        {/* </View> */}

      </TouchableHighlight>
    </EntryAnimation>
  );
};

export default PlaceCard;

const styles = (theme: any) => StyleSheet.create({
  container: {
    padding: 8,
    // ...SHADOWS.dark
  },
  imageStyle: {
    width: PLACES_CARD_WIDTH,
    height: PLACES_CARD_HEIGHT,
    elevation: 5


  },
  infoArea: {
    top: PLACES_CARD_HEIGHT / 3,
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 4

  },
  infoWrapper: {
    padding: 4,
    height: PLACES_CARD_HEIGHT / 2,
    position: 'absolute',
    width: PLACES_CARD_WIDTH,
    top: (PLACES_CARD_HEIGHT / 3 * 1.5),
    borderRadius: 6
  },
});
