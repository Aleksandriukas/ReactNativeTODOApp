import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  TouchableNativeFeedback,
} from "react-native";

export const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onLongPress={() => {
        onRemove(todo.id), Vibration.vibrate(5);
      }}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ba8cd7",
    borderRadius: 21,
    marginBottom: 5,
  },
});
