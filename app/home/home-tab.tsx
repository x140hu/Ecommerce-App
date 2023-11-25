import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Swiper from "../../components/swiper";
import { ProductListData, HomeSwiperData } from "../../fetch-data/home-tab";
import ProductItem from "../../components/product-item";

const HomeTab = () => {
  const productList = ProductListData;

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Swiper data={HomeSwiperData} />
      </View>

      <View style={[styles.titleTab]}>
        <View>
          <Text style={styles.canvas_title}>New Arrivals 🔥</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.canvas_seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          data={productList}
          numColumns={2}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </View >
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleTab: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  canvas_title: {
    fontSize: 20,
    fontWeight: "700",
  },
  canvas_seeAll: {
    fontSize: 15,
    color: "rgb(0, 0, 139)",
    fontWeight: "700",
  },
});

export default HomeTab;
