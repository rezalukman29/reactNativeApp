import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ScaleAnimation } from '../../../animation/ScaleAnimation';
import { FONTS, SHADOWS, SIZES } from '../../../theme/config';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import StyledText from '../../atoms/text/Label';

interface CategoryPiilzProps {
    category: any;
    selected: string;
    changeCategory: (id: string) => void;
}

const CategoryPiilz = ({ category, selected, changeCategory }: CategoryPiilzProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);

    return (
        <View style={style.container}>
            <ScrollView horizontal style={style.scollView} showsHorizontalScrollIndicator={false}>
                {Array.isArray(category) && category.map((item: any, index: number) => (
                    <View key={index}>
                        {selected === item.id ?
                            <TouchableOpacity style={[style.wrapper, { flexDirection: 'column' }]}>
                                {/* <SelectIcon color="#fff" size={20}/> */}
                                <StyledText size={SIZES.font} color={theme?.colors.PRIMARY} weight={FONTS.bold}>{item.name}</StyledText>
                            </TouchableOpacity>
                            :
                            <ScaleAnimation onPress={() => { }} disabled={false} scaleTo={0.92}>
                                <TouchableOpacity style={[style.wrapper, { backgroundColor: theme?.colors.BACKGROUND }]} onPress={() => changeCategory(item.id)}>
                                    <StyledText size={SIZES.font} color={theme?.colors.DISABLED} weight={FONTS.light}>{item.name}</StyledText>
                                </TouchableOpacity>
                            </ScaleAnimation>
                        }

                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default CategoryPiilz;

const styles = (theme: any) => StyleSheet.create({
    container: {
        // marginVertical: 12
    },
    scrollView: {
        height: 30,
    },
    wrapper: {
        margin: 2,
        width: 120,
        padding: 4,
        alignItems: 'center',


    }
});