import { Todo } from "@/app";
import Checkbox from "expo-checkbox";
import { Button, StyleSheet, Text, View, } from "react-native";

export type TodoItemProps = {
    task: Todo,
    toggleCompleted: (id: number) => void
    deleteTask: (id: number) => void
}
const TodoItem = ({ deleteTask, task, toggleCompleted }: TodoItemProps) => {

    return (
        <View style={style.view} >
            <View style={style.inner}>
                <Checkbox value={task.completed} onValueChange={() => toggleCompleted(task.id)} />
                <Text>{task.text}</Text>
            </View>
            <Button title="X" onPress={() => deleteTask(task.id)} />
        </View>
    )
}

const style = StyleSheet.create({
    inner: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 5,
    },
    view: {
        display: 'flex',
        columnGap: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default TodoItem;