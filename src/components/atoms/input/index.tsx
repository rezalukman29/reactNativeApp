import React, { useEffect, useRef, useState } from 'react'
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Animated,
    Easing,
    TouchableWithoutFeedback,
} from 'react-native'
import ActivityIcon from '../../../assets/icons/ActivityIcon'
import { width } from '../../../theme/config'
import useTheme from '../../../theme/useTheme'
import useThemedStyles from '../../../theme/useThemedStyles'

type Props = React.ComponentProps<typeof TextInput> & {
    label: string
    errorText?: string | null
}

const TextField: React.FC<Props> = (props) => {
    const {
        label,
        errorText,
        value,
        style,
        onBlur,
        onFocus,
        ...restOfProps
    } = props
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const inputRef = useRef<TextInput>(null)
    const focusAnim = useRef(new Animated.Value(0)).current;


    const theme = useTheme();
    const styling = useThemedStyles(styles);

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start()
    }, [focusAnim, isFocused, value])

    let color = isFocused ? theme?.colors.PRIMARY : '#9D9D9D'
    let borderWidth = isFocused ? 2: 1
    if (errorText) {
        color = '#B00020'
    }

    return (
        <View style={style}>
            <TextInput
                style={[
                    styling.input,
                    {
                        borderColor: color,
                        borderWidth: borderWidth
                    },
                ]}
                ref={inputRef}
                {...restOfProps}
                value={value}
                onBlur={(event) => {
                    setIsFocused(false)
                    onBlur?.(event)
                }}
                onFocus={(event) => {
                    setIsFocused(true)
                    onFocus?.(event)
                }}
            >
            </TextInput>

            <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
                <Animated.View
                    style={[
                        styling.labelContainer,
                        {
                            transform: [
                                {
                                    scale: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.75],
                                    }),
                                },
                                {
                                    translateY: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [14, -12],
                                    }),
                                },
                                {
                                    translateX: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [6, 0],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <ActivityIcon size={20} color={color} />
                        <Text
                            style={[
                                styling.label,
                                {
                                    color,
                                },
                            ]}
                        >
                            {label}
                            {errorText ? '*' : ''}
                        </Text>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
            {!!errorText && <Text style={styling.error}>{errorText}</Text>}
        </View>
    )
}

const styles = (theme: any) => StyleSheet.create({
    input: {
        padding: 24,
        borderRadius: 8,
        fontSize: 16,
        width: width * .8,
        height: 50
    },
    labelContainer: {
        position: 'absolute',
        paddingHorizontal: 8,
        backgroundColor: 'white',
    },
    label: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 16,
        paddingLeft: 8
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 12,
        color: '#B00020',
        fontFamily: 'Avenir-Medium',
    },
})

export default TextField