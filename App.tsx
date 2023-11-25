
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/login-screen';
import Welcome from './app/welcome';
import SignUpScreen from './app/sign-up-screen';
import React from 'react';
import BottomTab from './app/bottom-tab';
import EditProfile from './app/profile/edit-profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;