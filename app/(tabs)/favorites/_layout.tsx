import { defaultStyle } from "@/constants/Style"
import { Stack } from "expo-router"
import { View } from "react-native"

const ProfileScreenLayout = () => {
    return <View style={defaultStyle.container}>
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Profile",
                headerTitleAlign: "center",
            }}>

            </Stack.Screen>
        </Stack>
    </View >
}

export default ProfileScreenLayout;