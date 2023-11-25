import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
  View,
} from "react-native";

const Width = Dimensions.get("window").width - 40;
const Height = Dimensions.get("window").height;

const Swiper = (props: { data: string[] }) => {
  const [imgActive, setImgActive] = useState(0);

  const handleScroll = (event: any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <ScrollView
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.scrollView}
      >
        {props.data.map((image, index) => (
          <Image
            key={image}
            resizeMode="stretch"
            style={styles.image}
            source={{ uri: image }}
          />
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {props.data.map((_, index) => (
          <Text
            key={index}
            style={index === imgActive ? styles.activeDot : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    height: Height * 0.2,
    borderRadius: 10,
  },
  image: {
    width: Width,
    height: Height * 0.2,
    borderRadius: 10,
  },
  dotContainer: {
    position: "relative",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  activeDot: {
    marginHorizontal: 3,
    color: "#514EB7",
  },
  dot: {
    marginHorizontal: 3,
    color: "#DCDFE6",
  },
});

export default Swiper;
