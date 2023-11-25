import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Profile from "../../components/common/profile";
import Tabs from "../../components/tabs";
import { ProfileData } from "../../fetch-data/home-tab";
import { CategoryListData } from "../../fetch-data/category-image";
import CategoryList from "./category-list";
import HomeTab from "./home-tab";

const TabsData = [
  {
    title: "Home",
    content: <HomeTab />,
  },
  {
    title: "Category",
    content: <CategoryList categories={CategoryListData} />,
  },
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Profile profile={ProfileData} navigation={navigation} />
      <Tabs tabsData={TabsData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 110
  },
});

export default Home;
