import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const IncreaseAndDecrease = () => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  const decrementValue = () => {
    const newValue = value - 1;
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundItem}>
        <Pressable style={styles.button} onPress={decrementValue}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.valueText}>{value}</Text>
        <Pressable style={styles.button} onPress={incrementValue}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View>
        <Text>Available in stock</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  button: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 0.1,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#D3D3D3",
  },
  backgroundItem: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 0.01,
    justifyContent: "space-between",
    width: 110,
  },
  valueText: {
    fontSize: 25,
    marginBottom: -30,
  },
});

export default IncreaseAndDecrease;