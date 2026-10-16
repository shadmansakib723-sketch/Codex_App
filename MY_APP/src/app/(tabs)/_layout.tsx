import { BottomNavigation } from "@/components/BottomNavigation";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="friends" options={{ title: "Friends" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
