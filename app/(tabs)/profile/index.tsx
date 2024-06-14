import { StyleSheet, Text, View } from 'react-native';

export default function TabProfile() {


    return (
        <View style={styles.container}>
            <Text>Tab Profiel</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
