import { fontSize } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const RangeItem = () => {
    return (
        <View style={styles.rangeBox}>
            <Text style={styles.rangeText}>20 January</Text>
            <MaterialIcons name="arrow-right" size={20} color={Colors.slate} />
            <Text style={styles.rangeText}>20 January</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rangeText: {
        fontSize: fontSize.xs,
        fontFamily: 'Lato_400Regular',
        marginVertical: 'auto',
        color: Colors.slate,
    },
    rangeBox: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
        borderColor: Colors.slate

    }
})