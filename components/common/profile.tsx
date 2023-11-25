import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ProfileDto } from "../../constants/dto";

const Profile = (props: { profile: ProfileDto; navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.img} source={{ uri: props.profile.urlImage }} />
        <View>
          <Text style={styles.name}>Hi, {props.profile.name}</Text>
          <Text style={styles.subName}>{props.profile.subName}</Text>
        </View>
      </View>

      <View style={styles.toolBar}>
        <TouchableOpacity onPress={() => props.navigation.navigate("search")}>
          <Icon
            name="search"
            size={20}
            color="rgb(0, 0, 0)"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <Icon name="bell" size={20} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "#f9f9f9",
  },
  toolBar: {
    flexDirection: "row",
  },
  name: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  subName: {
    color: "black",
    fontSize: 15,
  },
});

export default Profile;
