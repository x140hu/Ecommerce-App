import colors from "../constants/colors";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CartProductList from "./cart/cart-product-list";
import CartCard from "./cart/cart-card";
import { ProductListData } from "../fetch-data/home-tab";
import { CartItemList } from "../fetch-data/cart-tab";
import { formatter } from "../constants/feature";

let TOTAL_AMOUNT = 0;

const getItem = (id) => {
  const item = ProductListData.find((e) => e.id === id);
  return item;
};

const PaymentScreen = () => {
  CartItemList.map(
    (item) => (TOTAL_AMOUNT += getItem(item.idProduct).price * item.quantity)
  );

  return (
    <View style={style.container}>
      <View style={style.title_canvas_01}>
        <Text style={style.title_address}>Address</Text>
        <TouchableOpacity>
          <Text style={style.title_edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={style.title_content}>
        <Image
          style={style.content_image}
          source={require("../../assets/images/map.png")}
        ></Image>

        <View style={style.content_address}>
          <Text style={style.content_address_01}>House</Text>
          <Text style={style.content_address_02}>
            {/* fix that */}
            5482 Adobe Falls rd #15San Diego, california(CA), 92120
          </Text>
        </View>
      </View>

      <View style={style.title_canvas}>
        {/* fix that */}
        <Text style={style.title_address}>Products (3)</Text>
        <CartProductList></CartProductList>
      </View>

      <View style={style.title_canvas}>
        <Text style={style.title_address}>Payment Method</Text>
      </View>

      <CartCard />

      <View style={[style.title_canvas, style.flex_direction_row]}>
        <Text style={style.title_total_amount}>Total amount</Text>
        <Text style={style.price_total_amount}>
          {formatter.format(TOTAL_AMOUNT)}
        </Text>
      </View>

      {/* btn checkout */}
      <TouchableOpacity style={style.btn_checkout}>
        <Text style={style.text_checkout}>Checkout Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  title_canvas_01: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title_address: {
    fontSize: 23,
    fontWeight: "600",
    marginLeft: 20,
  },
  title_edit: {
    fontSize: 18,
    color: "blue",
    lineHeight: 34,
    marginRight: 20,
  },
  title_content: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content_image: {
    width: "40%",
    borderRadius: 10,
  },
  content_address: {
    width: "50%",
  },
  content_address_01: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "500",
  },
  content_address_02: {
    marginTop: 10,
    fontSize: 15,
    color: colors.light.secondaryGray,
    width: "90%",
  },
  title_canvas: {
    marginTop: 20,
  },
  title_total_amount: {
    fontSize: 17,
    marginLeft: 20,
    fontWeight: "500",
    color: colors.light.secondaryGray,
  },
  flex_direction_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price_total_amount: {
    fontSize: 25,
    marginRight: 20,
    fontWeight: "700",
  },
  btn_checkout: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light.purple,
    marginTop: 20,
    width: "80%",
    marginLeft: 20,
    borderRadius: 40,
  },
  text_checkout: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.light.white,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default PaymentScreen;
