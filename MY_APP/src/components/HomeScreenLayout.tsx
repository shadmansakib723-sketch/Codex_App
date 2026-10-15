import type { ReactNode } from "react";
import { Image, ScrollView, View, type ImageSourcePropType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeScreenLayoutProps {
  artworkSource?: ImageSourcePropType;
  children?: ReactNode;
}

export function HomeScreenLayout({
  artworkSource,
  children,
}: HomeScreenLayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-artwork" testID="home-screen">
      {/* No top safe-area padding: this area also sits behind the status bar. */}
      <View
        className="aspect-[4/3] w-full shrink-0 bg-artwork"
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        testID="home-artwork"
      >
        {artworkSource && (
          <Image
            source={artworkSource}
            resizeMode="contain"
            className="h-full w-full"
            accessible={false}
          />
        )}
      </View>

      {/* Only the contents scroll; the panel edge and artwork remain fixed. */}
      <View
        className="-mt-3 min-h-0 flex-1 overflow-hidden rounded-t-3xl bg-panel"
        testID="home-panel"
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="grow px-4 pb-6 pt-4"
          contentContainerStyle={{
            paddingLeft: 16 + insets.left,
            paddingRight: 16 + insets.right,
          }}
          contentInsetAdjustmentBehavior="never"
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
          testID="home-panel-scroll"
        >
          {children}
        </ScrollView>
      </View>
    </View>
  );
}
