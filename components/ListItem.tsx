import { Colors, fontSize } from "@/constants/Colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export type ListItemProps = {
    title: string,
    subtitle?: string,
    avatar?: {
        url?: string,
    },
    onClick?: () => void,
    children?: React.ReactNode,
}

export const ListItem = ({ children, title, subtitle, avatar, onClick }: ListItemProps) => {

    return (
        <View style={styles.buttonView}>
            <Pressable onPress={onClick} style={styles.buttonStle}
                android_ripple={{ color: Colors.slateOp, borderless: true }}

            >
                {({ pressed }) => (

                    <View style={styles.item}>
                        {avatar ? <Image source={{ uri: avatar.url }} alt="PR" style={styles.avatar} /> : undefined}

                        <View>
                            <Text style={styles.title}>{title}</Text>
                            {subtitle ? <Text style={styles.createdBy}>{subtitle}</Text> : undefined}

                        </View>
                        <View style={styles.box}>
                            {children}
                        </View>
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
        borderRadius: 10,
        overflow: 'hidden'


    },
    buttonStle: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
    },
    item: {
        width: 'auto',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },

    avatar: {
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 100,
        objectFit: 'cover',
    },
    title: {
        fontSize: fontSize.base,
        color: Colors.darkSlate,
        fontFamily: 'Lato_700Bold'
    },
    createdBy: {
        fontSize: fontSize.xs,
        fontFamily: 'Lato_400Regular'
    },
    box: { flexGrow: 1, flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' },

})


