import { Pressable, StyleSheet } from "react-native"

export const IconButton = (props: {
    onClick?: () => void,
    children?: React.ReactNode,
}) => {
    const { onClick, children } = props
    return <Pressable onPress={onClick} style={styles.iconButton}
        android_ripple={{
            radius: 20,
            borderless: true,
        }}

    >
        {({ pressed }) => <>
            {children}
        </>


        }


    </Pressable >
}
const styles = StyleSheet.create({
    iconButton: {
        borderRadius: 100,

        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})