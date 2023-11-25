import React from "react";
import { Alert, SafeAreaView, Text, View, StyleSheet } from "react-native";
import CustomInput from "../components/common/custom-input";
import CustomButton from "../components/common/custom-button";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Create Account
        </Text>
        <Text style={{ color: '#a4a5af' }}>
          Start learning whit create your account
        </Text>

        <CustomInput icon={'user'}
          title={'Username'}
          placeholder={'Create your username'}
          returnKeyType='next' />

        <CustomInput icon={'envelope-o'}
          title={'Email or Phone Number'}
          placeholder={'Enter your email or phone number'}
          returnKeyType='next'
          keyboardType='email-address' />

        <CustomInput icon={'lock'}
          title={'Password'}
          placeholder={'Create your password'}
          returnKeyType='next'
          isPassword={true} />

        <View style={{ marginTop: 20 }}>
          <CustomButton text={'Create Account'}
            onPress={() => alert('hello')} />
        </View>

        <Text style={{ marginVertical: 20, fontSize: 15, color: '#a4a5af', textAlign: 'center' }}>Or using other method</Text>

        <CustomButton text={'Sign Up with Facebook'}
          onPress={() => Alert.alert('Can not access')}
          isOutline={true}
          imageUrl='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' />

        <View style={{ marginTop: 20 }}>
          <CustomButton text={'Sign Up with Google'}
            onPress={() => Alert.alert('Can not access')}
            isOutline={true}
            imageUrl='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png' />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20
  },
})

export default SignUpScreen;