import { defaultStyle } from "@/constants/Style";
import { titleVal } from "@/constants/TitleStyle";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function ProjectScreenLayout() {
    return (
        <View style={defaultStyle.container}>
            <Stack>
                <Stack.Screen name="new" options={{
                    ...titleVal({
                        title: "Add New Project"
                    })
                }} />
                <Stack.Screen name="[id]" options={{
                    ...titleVal({
                        title: "Projects"
                    })
                }} />
            </Stack>
        </View>
    )
}