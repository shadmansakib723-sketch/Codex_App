import { Tabs } from "expo-router";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "none",
        tabBarHideOnKeyboard: false,
        tabBarLabelPosition: "below-icon",
        tabBarIcon: () => null,
        tabBarIconStyle: { display: "none" },
        tabBarItemStyle: { justifyContent: "center" },
        tabBarLabel: ({ children, focused }) => (
          <Text
            className={`text-sm font-semibold ${focused ? "text-navigation-active" : "text-navigation-inactive"}`}
          >
            {children}
          </Text>
        ),
        // Navigator options have no className; height includes the home indicator.
        tabBarStyle: {
          height: 56 + insets.bottom,
          paddingTop: 0,
          paddingBottom: insets.bottom,
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E8E5",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="friends" options={{ title: "Friends" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
