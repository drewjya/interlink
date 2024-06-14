import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { useNavigationState } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
const App = () => {
  const currRoute = useNavigationState(state => state.routes[state.index])
  useEffect(() => {
    console.log("CURR", currRoute);

  }, [currRoute])
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Lato_700Bold,
    Lato_400Regular,

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <RootLayout />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />
      <Stack.Screen name="project" options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}



export default App;