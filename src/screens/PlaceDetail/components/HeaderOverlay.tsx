import React, { FC, memo, useMemo } from "react";
import { StyleSheet, Switch, Text, View, ViewProps } from "react-native";
import StyledText from "../../../components/atoms/text/Label";
import { FONTS, SIZES } from "../../../theme/config";
import useTheme from "../../../theme/useTheme";
import useThemedStyles from "../../../theme/useThemedStyles";

type Props = Pick<ViewProps, "style"> & { name: string };

const HeaderOverlay: FC<Props> = ({ name }) => {
  // const containerStyle = useMemo(() => [styles.container, style, {backgroundColor: theme?.colors.BACKGROUND}], [style]);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <StyledText size={SIZES.medium} color={theme?.colors.TEXT} weight={FONTS.light}>{name}</StyledText>
      <Switch onValueChange={theme?.toggleTheme} value={theme?.isLightTheme} />
    </View>
  );
};

const styles = (theme: any) => StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: theme?.colors.BACKGROUND
  },
  title: {
    fontSize: 24,
  },
});

export default memo(HeaderOverlay);
