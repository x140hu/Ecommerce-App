import { SIZES } from "@/constants";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../constants/colors";

const CartCard = () => {
	return (
		<TouchableOpacity style={style.container}>
			<View style={style.content}>
				<View style={style.contentLeft}>
					<Image
						style={style.image}
						source={require("../../assets/images/master-card.png")}
					/>
					<View>
						<Text style={{ fontWeight: "600", fontSize: 15 }}>
							Master Card
						</Text>
						<Text>**** **** 1092</Text>
					</View>
				</View>

				<View style={style.contentRight}>
					<Icon
						style={style.Icon}
						name="right"
						size={20}
						color={colors.light.secondaryGray}
					></Icon>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const w = SIZES.width - 40;

const style = StyleSheet.create({
	container: {
		borderColor: colors.light.secondaryGray,
		alignItems: "center",
		justifyContent: "center",
		width: w,
		marginLeft: 20,
		borderWidth: 1,
		height: 100,
		borderRadius: 15,
	},
	content: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: w,
		marginLeft: 30,
	},
	contentLeft: {
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 30,
		marginRight: 20,
	},
	contentRight: {
		marginRight: 30,
	},
});

export default CartCard;
