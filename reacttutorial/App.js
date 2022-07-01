import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AddTodo from "./Components/AddTodo/AddTodo";
import { generateUUID } from "./Components/Uuid";

export default function App() {

  return (
    <View style={styles.container}>
      <AddTodo />

      <StatusBar style="auto" />

      {/* {addTodo.map((todo) => (
        <View key={todo.id_}>
          <Text>{todo.task}</Text>
        </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
