import { HomeItem } from "@/components/HomeItem";
import { TitlePage } from "@/components/TitlePage";
import { Colors } from "@/constants/Colors";
import { screenStyle } from "@/constants/Style";
import { Octicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { ScrollView, View } from "react-native";


// const url = "https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"

const TabHome = () => {
    const route = useRoute()
    console.log(route.path);

    return (
        <ScrollView style={screenStyle.container}>
            <View
                style={{
                    paddingBottom: 12,
                }}
            >
                <TitlePage title="My Work" />
                <View>
                    <HomeItem title="Favorites" iconColor="#f5750c">
                        <Octicons size={18} name="star" color={Colors.secondary} />
                    </HomeItem>
                    <HomeItem title="Discussions" iconColor="#3259e6">
                        <Octicons size={18} name="comment-discussion" color={Colors.secondary} />
                    </HomeItem>
                    <HomeItem title="Projects" iconColor="#f53350">
                        <Octicons size={18} name="columns" color={Colors.secondary} />
                    </HomeItem>
                    <HomeItem title="Archived" iconColor="#333333">
                        <Octicons size={18} name="archive" color={Colors.secondary} />
                    </HomeItem>

                </View>
            </View>



        </ScrollView>
    );
}





export default TabHome;