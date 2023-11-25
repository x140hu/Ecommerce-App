import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/common/custom-button";

const Welcome = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate("Login");
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
        ></Image>
        <Text style={styles.title}>
          Various Collections Of The Latest Products
        </Text>
        <Text style={styles.msg}>
          Urna amet,susoendisse ullamcorper ac elit diam facilisis cursus
          vestibukum.
        </Text>

        <View style={{ marginTop: 10 }}>
          <CustomButton text={"Create Account"} onPress={handleSignUp} />
        </View>


        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.msgLogin}>Already Have an Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    borderRadius: 45,
    width: 250,
    height: 320,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
  },
  msg: {
    color: "#ccc",
    textAlign: "center",
    fontSize: 12,
    marginTop: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  msgLogin: {
    color: "#514eb7",
    textAlign: "center",
    fontSize: 12,
    marginTop: 12,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
  },
});

export default Welcome;
