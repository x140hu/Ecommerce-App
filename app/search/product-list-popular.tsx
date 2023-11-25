import { ProductDto } from "../../constants/dto";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../../constants/colors";

const ProductListPopular = (props: { listData: ProductDto[] }) => {
  return props.listData.map((product) => {
    if (
      product.name == undefined ||
      product.imageURL == undefined ||
      product.timeSearch == undefined ||
      product.statusType == -1
    )
      return <View></View>;

    const TypeView = (id) => {
      if (id == 0)
        return (
          <View style={[styles.typeCanvas, styles.bgLightGreen]}>
            <Text style={[styles.center, styles.colorGreen]}>Popular</Text>
          </View>
        );
      else if (id == 1)
        return (
          <View style={[styles.typeCanvas, styles.bgLightOrange]}>
            <Text style={[styles.center, styles.colorOrange]}>New</Text>
          </View>
        );
      else if (id == 2)
        return (
          <View style={[styles.typeCanvas, styles.bgLightRed]}>
            <Text style={[styles.center, styles.colorRed]}>Hot</Text>
          </View>
        );
      else return <View></View>;
    };
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        margin: 5,
      },
      content: {
        flexDirection: "row",
        alignItems: "center",
        // width: ((SIZES.width - 20) * 70) / 100,
        height: "100%",
      },
      img: {
        width: 80,
        height: 80,
        resizeMode: "stretch",
        borderRadius: 10,
      },
      textTitle: {
        fontSize: 14,
        fontWeight: "600",
      },
      textSecond: {
        fontSize: 12,
        color: colors.light.secondaryGray,
      },
      textContent: {
        marginLeft: 5,
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
        backgroundColor: colors.light.lightRed,
      },
      colorRed: {
        color: colors.light.red,
      },
      bgLightGreen: {
        backgroundColor: colors.light.lightGreen,
      },
      colorGreen: {
        color: colors.light.green,
      },
      bgLightOrange: {
        backgroundColor: colors.light.lightOrange,
      },
      colorOrange: {
        color: colors.light.orange,
      },
    });

    return (
      <TouchableOpacity key={product.id} style={styles.container}>
        <View style={styles.content}>
          <Image source={{ uri: product.imageURL }} style={styles.img}></Image>
          <View style={styles.textContent}>
            <Text style={styles.textTitle}>{product.name}</Text>
            <Text style={styles.textSecond}>{product.timeSearch}</Text>
          </View>
        </View>
        {TypeView(product.statusType)}
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  container: {},
});

export default ProductListPopular;
