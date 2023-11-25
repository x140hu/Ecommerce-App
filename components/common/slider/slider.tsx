import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RangeSliders from './range-sliders';

export default function Sliders() {
	const MIN_DEFAULT = 10
	const MAX_DEFAULT = 500
	const [minValue, setMinvalue] = useState(MIN_DEFAULT)
	const [maxValue, setMaxvalue] = useState(MAX_DEFAULT)
	return (
		<GestureHandlerRootView >
			<View style={styles.contentContainer}>
				<View style={styles.content}>
					<Text style={styles.text}>Price</Text>
					<RangeSliders
						sliderWidth={300}
						min={MIN_DEFAULT}
						max={MAX_DEFAULT}
						step={5}
						onValueChange={(range: any) => {
							setMaxvalue(range.max)
							setMinvalue(range.min)
						}
						}
					/>
					<View>
						<Text>{minValue}$</Text>
					</View>
					<View>
						<Text>{maxValue}$</Text>
					</View>
				</View>
			</View>
		</GestureHandlerRootView>
	)

}
const styles = StyleSheet.create({
	contentContainer: {
		height: 100,
		backgroundColor: 'white',
	},
	content: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 16,
		flexDirection: 'row'
	},
	text: {
		fontSize: 20,
		color: 'black'
	}
})