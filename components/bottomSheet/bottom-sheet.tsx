import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import colors from "../../constants/colors";

const BottomSheetChildren = (props) => {
	const { isVisible, onClose, children } = props;

	return (
		<Modal visible={isVisible} animationType="slide" transparent>
			<View style={styles.container}>
				<View style={styles.bottomSheet}>
					<View style={styles.bunnyEar}></View>
					{onClose ? (
						<TouchableOpacity
							onPress={onClose}
							style={styles.closeButton}
						>
							<Text style={styles.closeButtonText}>Close</Text>
						</TouchableOpacity>
					) : (
						<></>
					)}

					{children}
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	bottomSheet: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 5,
		paddingRight: 16,
		paddingLeft: 16,
		paddingBottom: 16,
	},
	bunnyEar: {
		alignSelf: "center",
		height: 5,
		width: 70,
		borderRadius: 10,
		backgroundColor: colors.light.gray,
		margin: 5,
	},
	closeButton: {
		alignSelf: "flex-end",
		marginBottom: 10,
	},
	closeButtonText: {
		color: "blue",
	},
});

export default BottomSheetChildren;
