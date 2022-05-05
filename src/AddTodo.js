import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const pressHaldler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Empty string");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Write what you have to do"
      />
      <View style={styles.add}>
        <Button title="add" onPress={pressHaldler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 40,
  },
  add: {
    backgroundColor: "#E6E6FA",
    borderRadius: 21,
  },
  input: {
    alignItems: "center",
    padding: 10,
    width: "85%",
    borderRadius: 21,
    backgroundColor: "#E6E6FA",
  },
});
