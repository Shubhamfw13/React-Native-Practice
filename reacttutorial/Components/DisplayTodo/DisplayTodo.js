import { Button, Text, View } from "react-native";

const DisplayTodo = ({ id_, task, removeTask }) => {
    console.log(id_)
  return (
    <View>
      <Text>{task}</Text>
      <Button onPress={() => removeTask(id_)} title="Remove Task" />
    </View>
  );
};

export default DisplayTodo;
