import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { CategoryDto } from "../../constants/dto";
import React from "react";

const CategoryList = (props: { categories: CategoryDto[] }) => {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        {props.categories.map((category) => (
          <View key={category.id} style={styles.container}>
            <Image
              style={styles.imageBanners}
              source={{ uri: category.imageURL }}
            />
            <View
              style={category.position === 0 ? styles.content : styles.content2}
            >
              <Text
                style={[
                  styles.textTitle,
                  category.position === 0 ? { color: "white" } : {},
                ]}
              >
                {category.title}
              </Text>
              <Text
                style={
                  (styles.textNumberProduct,
                  category.position === 0 ? { color: "white" } : {})
                }
              >
                {category.numberProduct} Products
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: "center",
  },
  imageBanners: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  content: {
    marginLeft: 20,
    position: "absolute",
  },
  content2: {
    paddingRight: 20,
    position: "absolute",
    alignSelf: "flex-end",
  },
  textTitle: {
    fontSize: 23,
    fontWeight: "900",
  },
  textNumberProduct: {
    fontSize: 17,
    fontWeight: "400",
  },
});

export default CategoryList;
