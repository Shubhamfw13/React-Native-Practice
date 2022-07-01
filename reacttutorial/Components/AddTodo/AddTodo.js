import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import DisplayTodo from "../DisplayTodo/DisplayTodo";
import { generateUUID } from "../Uuid";
const AddTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [addTodo, setAddTodo] = useState([]);

  const addTodoFunction = () => {
    const list = {
      id_: generateUUID(10),
      task: todoInput,
    };
    setAddTodo([...addTodo, list]);
  };
  console.log(addTodo)

  return (
    <View style={styles.todo_container}>
      <Text>Todo List</Text>
      <TextInput onChangeText={setTodoInput} placeholder="Add Todo" />
      <Button onPress={addTodoFunction} title="Add Todo" />
      {/* {addTodo.map((todo) => (
        <DisplayTodo  {...todo} />
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  todo_container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddTodo;
