import { Tabs } from "expo-router"

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '700'
            }, headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 0,
                paddingTop: 8,

            },


        }}>
            <Tabs.Screen name="favorites" />
            <Tabs.Screen name="playlist" />
            <Tabs.Screen name="(songs)" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}



export default TabsNavigation