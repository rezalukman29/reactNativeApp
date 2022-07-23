import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import EmailIcon from '../../../assets/icons/EmailIcon';
import { FONTS, SIZES, width } from '../../../theme/config';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import StyledText from '../text/Label';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean
}

const StyledButton = ({ title, onPress, isLoading }: ButtonProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
    return (
        <Pressable style={style.button} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 5 }}
                end={{ x: 1, y: 1 }} colors={['#77A1D3', '#79CBCA', '#77A1D3']} style={{
                    height: 50,
                    borderRadius: 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {isLoading ? <ActivityIndicator size="small" color="#fff" /> : <StyledText size={SIZES.medium} color={theme?.colors.BACKGROUND} weight={FONTS.semiBold}>{title}</StyledText>}
            </LinearGradient>
        </Pressable>
    );
};

export default StyledButton;

const styles = (theme: any) => StyleSheet.create({
    container: {},
    button: {
        height: 50,
        // backgroundColor: theme.colors.PRIMARY,
        width: width * .8,
        alignSelf: 'center',
        borderRadius: 8
    }
});


