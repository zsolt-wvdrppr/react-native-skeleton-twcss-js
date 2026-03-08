import { Link } from "expo-router";
import { GiPirateFlag } from "react-icons/gi";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="min-h-dvh flex flex-col gap-5 items-center">
      <Text type="title" className="screen-title">
        Home Screen
      </Text>
      <Link
        className="screen-nav-link bg-c-dark"
        title="Go to sub-screen"
        href="/screen-views/ScreenView"
      >
        <Text className="screen-nav-label">Go To Sub-Screen</Text>
      </Link>
      <GiPirateFlag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16" />
    </View>
  );
}
