import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

const CustomButton = ({
  text,
  onPress,
  isOutline = false,
  imageUrl = null,
}) => {
  const buttonStyles = isOutline ? styles.outlineButton : styles.button;
  const textStyles = isOutline ? styles.outlineButtonText : styles.buttonText;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.img} />}
        <Text style={textStyles}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#514eb7",
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  outlineButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    height: 50,
    borderRadius: 25,
  },
  outlineButtonText: {
    color: "#000",
    fontSize: 16,
  },
  img: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});

export default CustomButton;
