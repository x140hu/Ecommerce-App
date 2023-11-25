import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../constants/colors";
import { Fontisto } from "@expo/vector-icons";
import { ProductListData } from "../../fetch-data/home-tab";
import { CategoriesListData } from "../../fetch-data/category";
import SearchFavorite from "./search-favorite";
import CategoriesList from "./category-chip-list";
import { formatter } from "../../constants/feature";

const Favorite = () => {
  const dataDefault = ProductListData.filter((e) => e.isFavorite);
  const [filteredData, setFilteredData] = useState(dataDefault);

  const handleInputChange = (text) => {
    const filteredProducts = dataDefault.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  const handleSelectCategory = (categoryName) => {
    const filtered =
      categoryName === "All"
        ? dataDefault
        : dataDefault.filter((item) =>
            item.tag.toLowerCase().includes(categoryName.toLowerCase())
          );
    setFilteredData(filtered);
  };

  const renderFavoriteIcon = (favorite) => (
    <Icon
      name={favorite ? "heart" : "heart-o"}
      style={{ textAlign: "center" }}
      color={favorite ? colors.light.red : colors.light.black}
      size={10}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* title */}
      <View style={styles.titleTab}>
        <Text style={styles.titleTabText}>My Favorite</Text>
        <TouchableOpacity style={styles.iconRing}>
          <Fontisto name="bell" size={17} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ padding: 20 }}>
          {/* search */}
          <SearchFavorite onChangeText={handleInputChange} />

          {/* chip category */}
          <CategoriesList
            listData={CategoriesListData}
            onSelect={handleSelectCategory}
          ></CategoriesList>

          {/* render item list */}
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {filteredData.map((product) => {
              // const [favorite, setFavorite] = useState(
              //   product.isFavorite || false
              // );
              let favorite = product.isFavorite;
              const textBoldCenterStyles = [styles.textCenter, styles.fontBold];

              return (
                <TouchableOpacity style={styles.container_card}>
                  <View style={[styles.canvas_item, styles.card]}>
                    <Image
                      style={styles.image}
                      source={{ uri: product.imageURL }}
                    />
                    <TouchableOpacity
                      style={styles.btnFavorite}
                      onPress={() => (favorite = !favorite)}
                    >
                      {renderFavoriteIcon(favorite)}
                    </TouchableOpacity>
                  </View>
                  <View style={styles.content}>
                    <TouchableOpacity>
                      <Text style={[textBoldCenterStyles, { fontSize: 13 }]}>
                        {product.name}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.textCenter,
                        { fontSize: 10, color: colors.light.secondaryGray },
                      ]}
                    >
                      {product.description}
                    </Text>
                    <Text style={[textBoldCenterStyles, { fontSize: 11 }]}>
                      {formatter.format(product.price)}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconRing: {
    position: "absolute",
    right: 22,
  },
  myFavorite: {
    fontWeight: "600",
    fontSize: 17,
  },
  titleTab: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  titleTabText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  canvas: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  canvas_seeAll: {
    fontSize: 15,
    color: "rgb(0, 0, 139)",
    fontWeight: "700",
  },
  container_card: {
    width: "49%",
    height: "auto",
    marginBottom: 10,
  },
  canvas_item: {
    position: "relative",
  },
  btnFavorite: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: colors.light.white,
    opacity: 0.8,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
    top: 10,
    right: 10,
  },
  content: {
    top: 5,
    justifyContent: "center",
  },
  fontBold: {
    fontWeight: "500",
  },
  textCenter: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  card: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  productItem: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ip: {
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default Favorite;
