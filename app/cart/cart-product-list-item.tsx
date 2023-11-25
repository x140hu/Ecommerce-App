import { SIZES } from "../../constants";
import Colors from "../../constants/colors";

const {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} = require("react-native");

import { formatter } from "../../constants/feature";

const CartProductListItem = (props) => {
  let { id, name, imageURL, color, quantity, price } = props;

  if (
    name == undefined ||
    imageURL == undefined ||
    color == undefined ||
    quantity == -1 ||
    price == -1
  )
    return <View></View>;
  return (
    <TouchableOpacity style={Style.container}>
      <View style={Style.content}>
        <Image source={imageURL} style={Style.img}></Image>
        <View style={Style.textContent}>
          <Text style={Style.textTitle}>{name}</Text>
          <View style={Style.textColorContent}>
            <Text style={Style.textColor}>color: </Text>
            <Text style={Style.textColor_2}>{color}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>{formatter.format(quantity * price)} </Text>
      </View>
    </TouchableOpacity>
  );
};

const w = SIZES.width;

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    width: w - 30,
    margin: 5,
  },
  content: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    width: ((w - 20) * 70) / 100,
    height: "100%",
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  textColorContent: {
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  textSecond: {
    fontSize: 14,
    color: Colors.light.secondaryGray,
  },
  textColor: {
    fontSize: 14,
    color: Colors.light.secondaryGray,
  },
  textColor_2: {
    fontSize: 14,
  },
  textContent: {
    marginLeft: 10,
  },
  typeCanvas: {
    height: 30,
    width: 70,
    justifyContent: "center",
    borderRadius: 30,
  },
  center: {
    textAlign: "center",
  },
  bgLightRed: {
    backgroundColor: Colors.light.lightRed,
  },
  colorRed: {
    color: Colors.light.red,
  },
  bgLightGreen: {
    backgroundColor: Colors.light.lightGreen,
  },
  colorGreen: {
    color: Colors.light.green,
  },
  bgLightOrange: {
    backgroundColor: Colors.light.lightOrange,
  },
  colorOrange: {
    color: Colors.light.orange,
  },
});

export default CartProductListItem;
