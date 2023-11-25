import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { ProductDto } from "../constants/dto";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../constants/colors";
import { formatter } from "../constants/feature";

const ProductItem = ({ product }: { product: ProductDto }) => {
  const textBoldCenterStyles = [styles.textCenter, styles.fontBold];

  const [favorite, setFavorite] = useState(product.isFavorite || false);

  const renderFavoriteIcon = () => (
    <Icon
      name={favorite ? "heart" : "heart-o"}
      style={{ textAlign: "center" }}
      color={favorite ? colors.light.red : colors.light.black}
      size={10}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity key={product.id}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.imageURL }} resizeMode="cover" />
          <TouchableOpacity
            style={styles.btnFavorite}
            onPress={() => setFavorite((prevFavorite) => !prevFavorite)}
          >
            {renderFavoriteIcon()}
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.brandName}>
            {product.name}
          </Text>
          <Text numberOfLines={1} style={styles.productName} >
            {product.description}
          </Text>
          <Text style={[textBoldCenterStyles, { fontSize: 11 }]}>
            {formatter.format(product.price)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 2; // Divide by the number of columns (2)

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    margin: 10,
    alignItems: 'center',
  },
  imageContainer: {
    position: "relative",
  },
  btnFavorite: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: colors.light.white,
    opacity: 0.9,
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
    fontWeight: "600",
  },
  textCenter: {
    textAlign: "center",
  },
  productName: {
    textAlign: 'center',
    fontSize: 10,
    color: colors.light.secondaryGray,
  },
  brandName: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600"
  },
  image: {
    width: itemWidth,
    height: itemWidth * (4 / 3), // 3x4 aspect ratio
    borderRadius: 8,
  }
});

export default ProductItem;
