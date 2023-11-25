import colors from "../../constants/colors";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React, { useState } from "react";

const SearchFavorite = (props: { onChangeText: any }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="search" size={30} color="#000"></Icon>
        <TextInput
          style={styles.textInput}
          placeholder="Search something..."
          placeholderTextColor={colors.light.secondaryGray}
          onChangeText={props.onChangeText}
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="sliders" size={30} color="#000"></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.light.lightGray,
  },
  textInput: {
    marginLeft: 10,
    padding: 15,
    maxWidth: 220,
  },
});

export default SearchFavorite;
