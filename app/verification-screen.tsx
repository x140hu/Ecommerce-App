import { SIZES } from "../../constants";
import Colors from "../../constants/colors";
import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	View,
} from "react-native";
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 5;
const IMAGE_VERIFICATION = require("../../assets/images/verification-image.png");

const VerificationScreen = () => {
	const [value, setValue] = useState("");
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	return (
		<SafeAreaView style={styles.root}>
			<Image source={IMAGE_VERIFICATION} style={styles.image}></Image>

			<Text style={styles.title}>Verification Code</Text>
			<Text style={styles.secondText}>
				We have to sent the code verification to
			</Text>
			{/* fix that */}
			<Text>abcxyz@gmail.com</Text>

			<CodeField
				ref={ref}
				{...props}
				value={value}
				onChangeText={setValue}
				cellCount={CELL_COUNT}
				rootStyle={styles.codeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				renderCell={({ index, symbol, isFocused }) => (
					<Text
						key={index}
						style={[
							value != null && isFocused ? styles.cell : styles.cell,
							isFocused && styles.focusCell,
						]}
						onLayout={getCellOnLayoutHandler(index)}
					>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Text>
				)}
			/>

			<TouchableOpacity
				onPress={() => {
					// handle submit
				}}
				style={styles.btn}
			>
				<Text style={styles.btnText}>Submit</Text>
			</TouchableOpacity>

			<View style={styles.content}>
				<Text style={styles.contentText}>Didn't reveice the code? </Text>
				<TouchableOpacity
					onPress={() => {
						// handle resend
					}}
				>
					<Text style={styles.resend}>resend</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		padding: 20,
		flex: 1,
	},
	title: {
		extAlign: "center",
		fontWeight: "500",
		fontSize: 20,
	},
	secondText: {
		color: Colors.light.secondaryGray,
	},
	content: {
		flexDirection: "row",
	},
	contentText: {
		color: Colors.light.secondaryGray,
		fontSize: 11,
	},
	resend: {
		color: Colors.light.purple,
		fontSize: 11,
	},
	btn: {
		alignItems: "center",
		backgroundColor: Colors.light.purple,
		width: (SIZES.width * 80) / 100,
		marginTop: 20,
		marginBottom: 10,
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 70,
	},
	btnText: {
		color: Colors.light.white,
	},
	image: {
		height: 130,
		width: 130,
		marginBottom: 40,
	},
	codeFieldRoot: {
		marginTop: 20,
	},
	cell: {
		borderColor: Colors.light.white,
		backgroundColor: Colors.light.lightGrey,
		textAlign: "center",
		justifyContent: "center",
		width: 50,
		fontSize: 26,
		borderWidth: 2,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 10,
		margin: 5,
	},
	focusCell: {
		borderColor: Colors.light.lightPurple,
		backgroundColor: Colors.light.white,
	},
});

export default VerificationScreen;
