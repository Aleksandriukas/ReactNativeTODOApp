import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Novbar = (props) => {
  return (
    <View style={styles.novbar}>
      <Text style={styles.text}> {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  novbar: {
    backgroundColor: "#ba8cd7",
    height: 65,
    alignItems: "center",
    paddingVertical: 3,
    justifyContent: "flex-end",
  },
  text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 24,
  },
});
