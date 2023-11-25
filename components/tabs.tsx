import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabGroup}>
        {tabsData.map((tab) => (
          <TouchableOpacity
            key={tab.title}
            style={[
              styles.touch,
              activeTab.title === tab.title
                ? styles.btnTabActive
                : styles.btnTabInactive,
            ]}
            onPress={() => handleTabClick(tab)}
          >
            <Text style={styles.txt1}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tabContent}>{activeTab.content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  tabGroup: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  txt1: {
    fontSize: 16,
  },
  touch: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  btnTabActive: {
    borderBottomWidth: 1,
    borderBottomColor: "#7470c5",
  },

  tabContent: {},

  btnTabInactive: {
    opacity: 0.5,
  },
});

export default Tabs;
