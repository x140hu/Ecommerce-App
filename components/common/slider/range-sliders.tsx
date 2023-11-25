import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    useAnimatedProps,
    runOnJS
} from 'react-native-reanimated'
const RangeSliders = ({ sliderWidth, min, max, step , onValueChange}) => {
    const zIndex = useSharedValue(0)
    const zIndex2 = useSharedValue(0)
    const opacity = useSharedValue(0)
    const opacity2 = useSharedValue(0)
    const position = useSharedValue(0)
    const position2 = useSharedValue(sliderWidth)

    const gestureHandler = useAnimatedGestureHandler({

        onStart: (_, ctx) => { ctx.startX = position.value },
        onActive: (e, ctx) => {
            opacity.value = 1
            if (ctx.startX + e.translationX < 0) { position.value = 0 }
            else if (ctx.startX + e.translationX > position2.value) {
                position.value = position2.value
                zIndex = 1
                zIndex2 = 0
            }
            else { position.value = ctx.startX + e.translationX }
        },
        onEnd: () => {
            opacity.value = 0
            runOnJS(onValueChange)({
                min: min +
                Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step,
                max : min +
                Math.floor(position2.value / (sliderWidth / ((max - min) / step))) * step
            })
        }
    })

    const gestureHandler2 = useAnimatedGestureHandler({
        onStart: (_, ctx) => { ctx.startX = position2.value },
        onActive: (e, ctx) => {
            opacity2.value = 1
            if (ctx.startX + e.translationX > sliderWidth) { position2.value = sliderWidth }
            else if (ctx.startX + e.translationX < position.value) {
                position2.value = position.value
                zIndex = 0
                zIndex2 = 1
            }
            else { position2.value = ctx.startX + e.translationX }
        },
        onEnd: () => {
            opacity2.value = 0
            runOnJS(onValueChange)({
                min: min +
                Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step,
                max : min +
                Math.floor(position2.value / (sliderWidth / ((max - min) / step))) * step
            })
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
        zIndex: zIndex.value
    }))

    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateX: position2.value }],
        zIndex: zIndex2.value
    }))
    const opacityStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))
    const opacityStyle2 = useAnimatedStyle(() => ({
        opacity: opacity2.value
    }))
    const sliderStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
        width: position2.value - position.value
    }))
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
    const minLabelText = useAnimatedProps(() => {
        return {
            text: `$${min +
                Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step
                }`,
        }
    })
    const maxLabelText = useAnimatedProps(() => {
        return {
            text: `$${min +
                Math.floor(position2.value / (sliderWidth / ((max - min) / step))) * step
                }`,
        }
    })
    return (
        <View style={[styles.sliderContainer, { width: sliderWidth }]}>
            <View style={[styles.sliderBack, { width: sliderWidth }]} />
            <Animated.View style={[styles.sliderFont, sliderStyle]} />
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.thumb, animatedStyle]}>
                    <Animated.View style={[styles.label, opacityStyle]}>
                        <AnimatedTextInput
                            style={styles.labelText}
                            defaultValue="0"
                            animatedProps={minLabelText}
                            editable={false}
                        />
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>

            <PanGestureHandler onGestureEvent={gestureHandler2}>

                <Animated.View style={[styles.thumb, animatedStyle2]}>
                    <Animated.View style={[styles.label, opacityStyle2]}>
                        <AnimatedTextInput
                            style={styles.labelText}
                            defaultValue="0"
                            animatedProps={maxLabelText}
                            editable={false}
                        />
                    </Animated.View>
                </Animated.View>

            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    sliderBack: {
        height: 8,
        backgroundColor: '#DFEAF8',
        borderRadius: 20,


    },
    sliderFont: {
        height: 8,
        backgroundColor: '#3F4CF6',
        borderRadius: 20,

        position: 'absolute'
    },
    thumb: {
        position: 'absolute',
        left: -10,
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderColor: '#3F4CF6',
        borderWidth: 3,
        borderRadius: 10
    },
    label: {
        position: 'absolute',
        top: -40,
        bottom: 20,
        backgroundColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    labelText: {
        color: 'white',
        padding: 5,
        fontWeight: 'bold',
        width: '100%',
        fontSize: 16
    }
})

export default RangeSliders