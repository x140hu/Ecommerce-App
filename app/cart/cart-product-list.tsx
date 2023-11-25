import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import CartProductListItem from "./cart-product-list-item";
import { SIZES } from "../../constants";
import { CartItemList } from "../../fetch-data/cart-tab";
import { ProductListData } from "../../fetch-data/home-tab";

export const Data = (id) => {
  const item = ProductListData.find((e) => e.id === id);
  return item;
};

const CartProductList = () => {
  const cartList = CartItemList;

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={cartList}
        renderItem={({ item }) => {
          return (
            <CartProductListItem
              name={Data(item.idProduct).name}
              imageURL={Data(item.idProduct).imageURL}
              quantity={item.quantity}
              color={Data(item.idProduct).color}
              price={Data(item.idProduct).price}
            />
          );
        }}
        numColumns={1}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: SIZES.width,
  },
});

export default CartProductList;
