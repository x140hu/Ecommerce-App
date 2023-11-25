import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SettingsData } from "../../fetch-data/profile-tab";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Profile = ({ navigation }) => {
  const settingData = SettingsData;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.tabTitle}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile</Text>
        </View>
        {/* General */}
        {settingData.map((settingGroup) => (
          <View>
            <Text style={styles.form}>{settingGroup.title}</Text>
            {settingGroup.content.map((setting) => (
              <TouchableOpacity style={styles.editProfile} onPress={() => navigation.navigate(setting.navigate)}>
                <Icon name={setting.icon} size={20} color="black">
                  {" "}
                </Icon>
                <Text style={styles.settingsName}>{setting.title}</Text>
                <View style={styles.iconRight}>
                  <Icon name="chevron-right" size={20} color="grey"></Icon>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  editProfile: {
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "##EEEEEE",
    flexDirection: "row",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
  settingsName: {
    marginLeft: 20,
  },
  iconRight: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  tabTitle: {
    alignItems: "center",
    paddingVertical:20
  },
  form: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Profile;
