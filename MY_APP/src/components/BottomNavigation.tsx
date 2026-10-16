import { Ionicons } from "@react-native-vector-icons/ionicons/static";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { cssInterop } from "nativewind";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";
import { I18nManager, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const TabIcon = cssInterop(Ionicons, { className: "style" });

const tabs: Record<
  string,
  { label: string; icon: ComponentProps<typeof Ionicons>["name"]; testID: string }
> = {
  index: { label: "Home", icon: "home-outline", testID: "tab-home" },
  friends: { label: "Friends", icon: "people", testID: "tab-friends" },
  profile: {
    label: "Profile",
    icon: "person-circle-outline",
    testID: "tab-profile",
  },
};

export function BottomNavigation({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) {
  const [rowWidth, setRowWidth] = useState(0);
  const selectedIndex = useSharedValue(state.index);
  const tabWidth = rowWidth / state.routes.length;
  const direction = I18nManager.isRTL ? -1 : 1;

  useEffect(() => {
    selectedIndex.value = withTiming(state.index, {
      duration: 240,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [selectedIndex, state.index]);

  const bubbleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: selectedIndex.value * tabWidth * direction }],
  }));

  return (
    // This is a normal navigator footer, so screens stop above the entire bar.
    <View
      className="bg-panel pt-2"
      style={{
        paddingBottom: Math.max(insets.bottom, 12) + 7,
        paddingLeft: 24 + insets.left,
        paddingRight: 24 + insets.right,
      }}
      testID="bottom-navigation"
    >
      <View
        className="w-full max-w-[400px] self-center rounded-full border border-navigation-border bg-white p-1"
        style={styles.shadow}
      >
        <View
          className="relative flex-row"
          onLayout={({ nativeEvent }) => setRowWidth(nativeEvent.layout.width)}
        >
          {rowWidth > 0 && (
            <Animated.View
              cssInterop={false}
              pointerEvents="none"
              accessible={false}
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
              style={[styles.bubbleContainer, { width: tabWidth }, bubbleStyle]}
              testID="navigation-selection"
            >
              <View className="flex-1 rounded-full bg-navigation-selected" />
            </Animated.View>
          )}
          {state.routes.map((route, index) => {
            const tab = tabs[route.name];

            if (!tab) return null;

            const focused = state.index === index;
            const options = descriptors[route.key]?.options;

            return (
              <Pressable
                key={route.key}
                accessibilityRole="tab"
                accessibilityState={{ selected: focused }}
                accessibilityLabel={options?.tabBarAccessibilityLabel ?? tab.label}
                className="min-h-[52px] flex-1 items-center justify-center gap-0.5 rounded-full px-2 py-1 active:opacity-60"
                onPress={() => {
                  const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!focused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                  }
                }}
                onLongPress={() => {
                  navigation.emit({ type: "tabLongPress", target: route.key });
                }}
                testID={options?.tabBarButtonTestID ?? tab.testID}
              >
                <TabIcon
                  name={tab.icon}
                  size={24}
                  allowFontScaling={false}
                  accessible={false}
                  accessibilityElementsHidden
                  importantForAccessibility="no-hide-descendants"
                  className={`h-6 w-6 text-center leading-6 ${focused ? "text-navigation-active" : "text-navigation-inactive"}`}
                />
                <Text
                  className={`text-xs font-navigation leading-4 ${focused ? "text-navigation-active" : "text-navigation-inactive"}`}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// Keep animated container styles separate from NativeWind so Reanimated retains them.
const styles = StyleSheet.create({
  bubbleContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    start: 0,
  },
  shadow: {
    shadowColor: "#15191D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
});
