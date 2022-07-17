import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TouchableHighlight, View } from "react-native";
import * as React from 'react';
import { FONTS, ICON_BUTTON, ICON_LARGE, ICON_NORMAL, SIZES } from "../../../theme/config";
import useTheme from "../../../theme/useTheme";
import useThemedStyles from "../../../theme/useThemedStyles";
import StyledText from "../../atoms/text/Label";
import BackSecondaryIcon from "../../../assets/icons/BackSecondaryIcon";

interface Props {
    title?: string
}

const TopBackNavigation = ({ title }: Props) => {
    const navigation = useNavigation();
    const theme = useTheme();
    const style = useThemedStyles(styles);
    return (
        <View style={style.container}>
            <TouchableHighlight
                underlayColor={theme?.colors.SECONDARY}
                style={style.backButton}
                onPress={() => {
                    navigation.goBack()
                }}>
                <BackSecondaryIcon color={theme?.colors.PRIMARY} size={ICON_BUTTON} />
            </TouchableHighlight>
            <StyledText size={SIZES.large} weight={FONTS.regular} color={theme?.colors.TEXT}>{title}</StyledText>

        </View>
    )
}

export default TopBackNavigation;

const styles = (theme: any) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        height: 50
    },
    backButton: {
        borderRadius: 6,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
});