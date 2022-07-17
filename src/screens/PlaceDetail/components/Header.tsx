import { LinearGradient } from "react-native-linear-gradient";
import React, { FC, memo, useMemo } from "react";
import {
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";
import { DEFAULT_PHOTO, FONTS, HEADER_PLACE_HEIGHT, HEADER_PLACE_WIDTH, height, SIZES, width } from "../../../theme/config";
import useTheme from "../../../theme/useTheme";
import useThemedStyles from "../../../theme/useThemedStyles";
import StyledText from "../../../components/atoms/text/Label";

export const PHOTO_SIZE = 120;

type Props = Pick<ViewProps, "style"> & {
  photo: string;
  name: string;
  bio: string;
};

const Header: FC<Props> = ({ name, photo, bio }) => {
  // const containerStyle = useMemo(() => [styles.container, style], []);

  const photoSource = useMemo<ImageProps["source"]>(() => ({ uri: photo }), []);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View style={[style.container, { backgroundColor: theme?.colors.BACKGROUND }]}>
      <ImageBackground style={style.photo} source={{ uri: photo ? photo : DEFAULT_PHOTO }} >
        <LinearGradient
          // Button Linear Gradient
          colors={['transparent', theme?.colors.BACKGROUND]}
          style={style.infoWrapper}>
          <View style={style.infoArea}>
            <StyledText size={SIZES.large} color={theme?.colors.TEXT}>{name}</StyledText>
              <View style={{ bottom: 4 }}>
              <StyledText size={SIZES.small} color={theme?.colors.TEXT} weight={FONTS.light}>{bio}</StyledText>
          </View>
        </View>
      </LinearGradient>
      {/* <View style={style.textContainer}>
          <Label type="screenTitle">{name}</Label>
          <Label type="title">{bio}</Label>
        </View> */}
    </ImageBackground>

    </View >
  );
};

const styles = (theme: any) => StyleSheet.create({
  textContainer: { marginLeft: 24, justifyContent: "center", flex: 1 },
  name: { fontSize: 24, fontWeight: "700" },
  bio: { fontSize: 15, marginTop: 4 },
  photo: {
    height: height / 4,
    width: width,
    // borderRadius: PHOTO_SIZE / 2,
    position: 'absolute',
    opacity: 1
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 24,
    height: height / 4
  },
  infoArea: {
    top: HEADER_PLACE_HEIGHT / 10,
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 4

  },
  infoWrapper: {
    padding: 4,
    height: HEADER_PLACE_HEIGHT / 3,
    position: 'absolute',
    width: HEADER_PLACE_WIDTH,
    top: (HEADER_PLACE_HEIGHT / 3) * 2,
  },
});

export default memo(Header);
