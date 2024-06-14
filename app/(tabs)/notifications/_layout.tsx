import { defaultStyle } from "@/constants/Style";
import { titleVal } from "@/constants/TitleStyle";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function NotificationLayoutScreen() {
    return (

        <View style={defaultStyle.container}>
            <Stack>
                <Stack.Screen name="index" options={
                    {
                        ...titleVal({
                            title: "Notification"
                        }),

                    }
                } />
            </Stack>
        </View>
    )
}