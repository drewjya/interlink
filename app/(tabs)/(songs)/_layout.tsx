import { defaultStyle } from "@/constants/Style"
import { Stack } from "expo-router"
import { View } from "react-native"

const SongsScreenLayout = () => {
    return <View style={defaultStyle.container}>
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Songs",
                headerTitleAlign: "center",
            }}>

            </Stack.Screen>
        </Stack>
    </View >
}

export default SongsScreenLayout;