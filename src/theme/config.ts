import { Dimensions } from "react-native";

export const SPACING = 16
export const SPACING_HALF = 8
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const WIDTH_BOX = width - (SPACING * 2)
export const ICON_SIZE = 36
export const ICON_LARGE = 50
export const ICON_NORMAL = 24
export const ICON_SMALL = 20
export const ICON_BUTTON = 28
export const PLACES_CARD_WIDTH = width * .45
export const PLACES_CARD_HEIGHT = width * .65
export const DEFAULT_PHOTO = 'https://www.tipsdoktercantik.com/wp-content/uploads/2017/07/Labuan-Bajo-Tak-Sekedar-Jembatan-Menuju-Taman-Nasional-Komodo1.jpg'
export const HEADER_PLACE_WIDTH = width
export const HEADER_PLACE_HEIGHT = height /4
export const NEARBY_PLACES_WIDTH = width * 0.7
export const NEARBY_PLACES_HEIGHT = width * 0.45


export const COLORS = {
    primary: "#001F2D",
    secondary: "#4D626C",
    error: "#FF9494",
    white: "#FFF",
    gray: "#74858C",
};

export const PADDING = {
    small: 10,
    medium: 14,
    white: 18,

};


export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};

export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
};

export const FONTS = {
    bold: "Inter-Bold",
    semiBold: "Inter-SemiBold",
    medium: "Inter-Medium",
    regular: "Inter-Regular",
    light: "Inter-Light",
    latina: "AliyaJayner-MVAgv",
    pro: "YouthTouchDemoRegular-4VwY"
};

export const SPRING_CONFIG: any = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
}