import React, { useState } from "react";
import { View, Button, Text } from "react-native";

import BottomSheetChildren from "./bottom-sheet";

const TestBottomSheet = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleBottomSheet = () => {
		setIsVisible(!isVisible);
	};

	return (
		<View>
			{/* Nút để mở/closed bottom sheet */}
			<Button title="Toggle Bottom Sheet" onPress={toggleBottomSheet} />
			{/* Bottom sheet được truyền nội dung qua props và isVisible để hiển thị/ẩn */}
			<BottomSheetChildren isVisible={isVisible} onClose={toggleBottomSheet}>
				<Text>This is the content of the bottom sheet.</Text>
			</BottomSheetChildren>
		</View>
	);
};

export default TestBottomSheet;
