import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Alert } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabsNavigation = () => {
    const inset = useSafeAreaInsets()
    
    return (
        <Tabs

            screenOptions={{

                tabBarInactiveTintColor: '#64748B',
                tabBarActiveTintColor: Colors.darkSlate,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '700'
                }, headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.primary,
                    paddingRight: inset.right,
                    paddingLeft: inset.left,
                    paddingBottom: inset.bottom ?? 5,
                    position: 'absolute',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    elevation: 2,
                    marginHorizontal: 0,
                    minHeight: 60,
                    borderRadius: 10,
                    borderTopWidth: 0
                },
            }}>
            <Tabs.Screen name="(home)" options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => {
                    if (focused) {
                        return <Iconify icon='octicon:home-fill-16' size={24} color={color} />
                    }
                    return <Iconify icon='octicon:home-16' size={24} color={color} />

                }
            }} />
            <Tabs.Screen name="notifications" options={{
                title: "Notification",
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "notifications" : "notifications-outline"} size={28} color={color} />
            }} />
            <Tabs.Screen name="search" options={{
                title: "Search",
                tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="magnify" size={25} color={color} />
            }} />

            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({ color, focused }) => <Ionicons name="person" size={24} color={color} />
            }} />
        </Tabs>
    )
}






export default TabsNavigation

