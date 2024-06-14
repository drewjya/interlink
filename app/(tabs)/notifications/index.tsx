import { ListItem } from '@/components/ListItem';
import { screenStyle } from '@/constants/Style';
import { ScrollView, Text, View } from 'react-native';

export default function TabProfile() {
    return (
        <ScrollView style={screenStyle.container}>
            <View
                style={{
                    rowGap: 12,
                    paddingBottom: 12,
                }}
            >
                <Text style={screenStyle.titleStyle}>Recent Updates</Text>
                <View
                    style={{
                        rowGap: 5,
                    }}
                >
                    {[1, 2, , 3].map((e) => {
                        return (
                            <ListItem
                                key={e}

                                title="Titla ashsa"
                                subtitle="asjsj"
                                children={<View>
                                    <Text>Diagram</Text>
                                </View>}

                            />
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

