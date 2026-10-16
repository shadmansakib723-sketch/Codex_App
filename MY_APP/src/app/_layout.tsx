import "../../global.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (fontError) throw fontError;
  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" hidden={false} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
