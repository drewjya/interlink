import { Colors, fontSize } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";


export type HomeItemProps = {
    title: string,
    onClick?: () => void,
    children: React.ReactNode,
    iconColor?: string
}

export const HomeItem = ({ children, iconColor, title, onClick }: HomeItemProps) => {

    return (
        <View style={styles.buttonView}>
            <Pressable onPress={onClick} style={styles.buttonStle}
                android_ripple={{ color: Colors.slateOp, borderless: true }}

            >
                {({ pressed }) => (

                    <View style={styles.item}>
                        <View style={{ ...styles.icon, backgroundColor: iconColor }}>
                            <View style={{ margin: 'auto' }}>
                                {children}
                            </View>
                        </View>


                        <Text style={styles.title}>{title}</Text>




                    </View>
                )}


            </Pressable >
        </View>
    )
}


const styles = StyleSheet.create({
    buttonView: {
        alignSelf: 'stretch',
        justifyContent: 'center',

        overflow: 'hidden',
        backgroundColor: Colors.secondary

    },
    icon: {

        borderRadius: 4,
        height: 30,
        width: 30,

    },
    buttonStle: {


    },
    item: {
        width: 'auto',
        padding: 10,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        columnGap: 15
    },

    avatar: {
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 100,
        objectFit: 'cover',
    },
    title: {
        fontSize: fontSize.sm,
        color: Colors.darkSlate,
        fontFamily: 'Lato_400Regular'
    },



})


