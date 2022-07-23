import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { useFonts } from "expo-font"
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import { SHADOWS } from '../../../theme/config';

interface LabelProps {
    size: number;
    color: string;
    weight?: string;
    children: any
}

const StyledText = ({ size, color, weight, children, ...restOfProps }: LabelProps) => {
    // const [loaded] = useFonts({
    //     InterBold: require('../../../assets/assets/fonts/Inter-Bold.ttf'),
    //     InterSemiBold: require("../../../assets/assets/fonts/Inter-SemiBold.ttf"),
    //     InterMedium: require("../../../assets/assets/fonts/Inter-Medium.ttf"),
    //     InterRegular: require("../../../assets/assets/fonts/Inter-Regular.ttf"),
    //     InterLight: require("../../../assets/assets/fonts/Inter-Light.ttf"),
    // });
    // if (!loaded) return null;
    const theme = useTheme();
    const style = useThemedStyles(styles);

    return (
        <View style={style.container}>
            <Text style={{
                fontSize: size,
                color: color,
                fontFamily: weight,
                textAlign: 'justify'
            }}
            {...restOfProps}
            >{children}</Text>
        </View>
    );
};

export default StyledText;

const styles = (theme: any) => StyleSheet.create({
    container: {

    }
});
