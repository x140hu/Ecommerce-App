import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { HistoryTabData, OrderTabData } from "../../fetch-data/order-tab";
import Tabs from "../../components/tabs";
import OrderHistory from "./order-history";
import MyOrder from "./my-order";

const TabsData = [
  {
    title: "My Order",
    content: <MyOrder params={OrderTabData} />,
  },
  {
    title: "History",
    content: <OrderHistory params={HistoryTabData} />,
  },
];

const Order = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabTitle}>
        <Text style={styles.tabTitleText}>My Order</Text>
      </View>
      <Tabs tabsData={TabsData} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabTitle: {
    alignItems: "center",
    marginVertical: 20,
  },
  tabTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Order;
