import React from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/common/custom-button";
import CustomInput from "../components/common/custom-input";

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Main");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login Account</Text>
      <Text style={{ color: "#a4a5af" }}>
        Please login with registered account
      </Text>

      <CustomInput
        icon={"envelope-o"}
        title={"Email or Phone Number"}
        placeholder={"Enter your email or phone number"}
        returnKeyType="next"
        keyboardType="email-address"
      />

      <CustomInput
        icon={"lock"}
        title={"Password"}
        placeholder={"Enter your password"}
        returnKeyType="next"
        isPassword={true}
      />

      <TouchableOpacity onPress={() => Alert.alert("Can not access")}>
        <Text style={styles.forgotPass}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <CustomButton text={"Sign In"} onPress={handleLogin} />
      </View>

      <Text
        style={{
          marginVertical: 20,
          fontSize: 15,
          color: "#a4a5af",
          textAlign: "center",
        }}
      >
        Or using other method
      </Text>

      <CustomButton
        text={"Sign In with Facebook"}
        onPress={() => Alert.alert("Can not access")}
        isOutline={true}
        imageUrl="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
      />

      <View style={{ marginTop: 20 }}>
        <CustomButton
          text={"Sign In with Google"}
          onPress={() => Alert.alert("Can not access")}
          isOutline={true}
          imageUrl="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  forgotPass: {
    textAlign: "right",
    color: "#6763c1",
    marginTop: 10,
  },
});

export default LoginScreen;
