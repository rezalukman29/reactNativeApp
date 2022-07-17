// React Dependencies
import React, { CSSProperties } from 'react'
import { TouchableOpacity, View } from 'react-native'
//Import Mapping Icon 
import { mapIconType } from "./mapIconType"

type Props = {
    icon: Partial<keyof typeof mapIconType> | React.ReactNode,
    color?: string,
    styles?: CSSProperties
    onPress?: () => void
}

//ATOMIC ICON
const Icon = ({
    icon,
    color,
    styles,
    onPress
}: Props) => {
    return (
        <View
            style={{
                // flex: 1,
                height: 100,
                width: 100
            }}
        >
            {mapIconType[icon as keyof typeof mapIconType] ?? icon}
        </View>
    )
}

export default Icon;

Icon.defaultProps = {
    color: "#686D8E",
    size: 14,
}