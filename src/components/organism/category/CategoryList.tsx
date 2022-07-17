import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { COLORS, DEFAULT_PHOTO, FONTS, PADDING, SHADOWS, SIZES, width } from '../../../theme/config';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import { EntryAnimation } from '../../../animation/EntryAnimation';
import { ScaleAnimation } from '../../../animation/ScaleAnimation';
import StyledText from '../../atoms/text/Label';

interface CategoryListProps {
    category: any;
    toCategoryContent: (payload: any) => void;
}

const CATEGORY_CARD_HEIGHT = width * 0.4
const CATEGORY_CARD_WIDTH = width * 0.3

const CategoryList = ({ category, toCategoryContent }: CategoryListProps) => {
    const theme = useTheme();
    const style = useThemedStyles(styles);
    const { isLoadingCategory } = category
    const categoryData = category.category
    return (
        <SafeAreaView style={style.container}>
            <View style={{ paddingHorizontal: PADDING.medium, flexDirection: 'row', justifyContent: 'space-between', }}>
                <StyledText size={SIZES.large} color={theme?.colors.TEXT} weight={FONTS.semiBold}>Category</StyledText>
                <Text
                    style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.small,
                        color: theme?.colors.PRIMARY,
                        top: 8
                    }}
                >
                    Show All
                </Text>
            </View>
            <ScrollView horizontal>
                {Array.isArray(categoryData) && categoryData.map((item: any, index: number) => (
                    <EntryAnimation index={index + 1}>
                        <TouchableOpacity onPress={() => toCategoryContent({ categoryId: item.id, name: item.name })}>
                            <ImageBackground source={{ uri: item.description ? item.description : DEFAULT_PHOTO }}
                                style={style.categoryBar}
                                imageStyle={{
                                    borderRadius: 6,

                                }}>
                                <LinearGradient
                                    // Button Linear Gradient
                                    colors={['transparent', '#000']}
                                    style={style.infoWrapper}>
                                    <View style={{ alignSelf: 'flex-end' }}>
                                        <Text
                                            style={{
                                                fontFamily: FONTS.light,
                                                fontSize: SIZES.medium,
                                                color: '#fff',
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                    </View>

                                </LinearGradient>

                            </ImageBackground>
                        </TouchableOpacity>
                    </EntryAnimation>
                ))}
            </ScrollView>
        </SafeAreaView >
    );
};

export default CategoryList;

const styles = (theme: any) => StyleSheet.create({
    container: {

        backgroundColor: theme?.colors.BACKGROUND,
    },
    categoryBar: {
        width: CATEGORY_CARD_WIDTH,
        height: CATEGORY_CARD_HEIGHT,
        // backgroundColor: theme.colors.PRIMARY,
        margin: 6,
        // ...SHADOWS.medium,
        ...SHADOWS.medium,
        elevation: 6,
        // backgroundColor: 'rgba(0,0,0,0.45)',



    },
    infoWrapper: {
        padding: 4,
        height: CATEGORY_CARD_HEIGHT / 2,
        position: 'absolute',
        width: CATEGORY_CARD_WIDTH,
        top: CATEGORY_CARD_HEIGHT / 2,
        borderRadius: 6,
        justifyContent: 'flex-end'
    },
});
