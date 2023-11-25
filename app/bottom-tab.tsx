import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Home from "./home/home";
import Profile from "./profile/profile";
import Favorite from "./favorite/favorite";
import Order from "./order/order";
import Search from "./search/search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarLabel:
    {
      main: "Home",
      order: "Order",
      favorite: "Favorite",
      profile: "Profile",
    }[route.name] || "",
  tabBarIcon: ({ color }) => (
    <FontAwesome
      name={
        {
          main: "home",
          order: "truck",
          favorite: "heart",
          profile: "user",
        }[route.name] || ""
      }
      size={28}
      style={{ marginBottom: -3 }}
      color={color}
    />
  ),
});

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="search" component={Search} />
  </Stack.Navigator>
);

const OrderStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="order"
      component={Order}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="favorite"
      component={Favorite}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="main"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="order"
        component={OrderStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
