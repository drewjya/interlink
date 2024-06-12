import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}
export default function Index() {
  const [task, setTask] = useState<Todo[]>([
    { id: 1, text: "Doctor Appointment", completed: true },
  ])
  const [text, setText] = useState("")

  const addTask = () => {
    setTask([...task, { id: Date.now(), completed: false, text }])
    setText("")
  }
  const deleteTask = (id: number) => {
    setTask(task.filter(e => e.id !== id));
  }

  const setCompleted = (id: number) => {
    console.log(task.map(e => (e.id === id ? { ...e, completed: !e.completed } : e)));

    setTask(task.map(e => (e.id === id ? { ...e, completed: !e.completed } : e)))
  }

  return (
    <View>
      <View>
        {task.map(task => (
          <TodoItem key={task.id} task={task} deleteTask={(i) => deleteTask(i)} toggleCompleted={(i) => setCompleted(i)} />
        ))}
      </View>
      <TextInput value={text} onChangeText={e => setText(e)} placeholder="New Taxt" />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}


