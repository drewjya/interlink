import { screenPadding } from "@/constants/Colors";
import { screenStyle } from "@/constants/Style";
import { Text, View } from "react-native";

export const TitlePage = ({ title, children }: { title: string, children?: React.ReactNode },) => {
    return <View style={{ overflow: 'hidden', flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: screenPadding.horizontal, }}>
        <Text style={screenStyle.titleStyle}>{title}</Text>
        {children}
    </View>;
}
