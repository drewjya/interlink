import { defaultStyle } from "@/constants/Style"
import { Stack } from "expo-router"
import { View } from "react-native"

const FavoriteScreenLayout = () => {
    return <View style={defaultStyle.container}>
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Playlist",
                headerTitleAlign: "center",
            }}>

            </Stack.Screen>
        </Stack>
    </View >
}

export default FavoriteScreenLayout;