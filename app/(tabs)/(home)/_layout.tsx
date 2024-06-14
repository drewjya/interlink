import { IconButton } from "@/components/IconButton";
import { defaultStyle } from "@/constants/Style";
import { titleVal } from "@/constants/TitleStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HomeScreenLayout() {
    return (
        <View style={defaultStyle.container}>
            <Stack>
                <Stack.Screen name="index" options={
                    {
                        ...titleVal({
                            title: "Home",
                            headerTitleAlign: "left"
                        }),

                        headerRight: (() => {
                            return <HeaderHome />
                        })
                    }
                } />
            </Stack>
        </View>
    )
}

const HeaderHome = () => {
    const router = useRouter()
    const createNewProject = () => {
        router.push("/project/new")
    }
    return <View style={styles.headerRight} >

        <IconButton onClick={() => {
            createNewProject()
        }}>

            <MaterialCommunityIcons name="plus-circle-outline" size={25} />
        </IconButton>
        <IconButton onClick={() => { }}>

            <MaterialCommunityIcons name="sync" size={25} />
        </IconButton>
    </View>
}

const styles = StyleSheet.create({
    headerRight: {
        columnGap: 1,
        flexDirection: 'row'
    }
})