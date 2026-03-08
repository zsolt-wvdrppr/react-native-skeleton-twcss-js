import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["top"]} className="relative flex-1 gap-5 items-center">
      <Text className="screen-title">Home Screen</Text>
      <Link
        className="screen-nav-link bg-c-dark"
        title="Go to sub-screen"
        href="/screen-views/ScreenView"
      >
        <Text className="screen-nav-label">Go To Sub-Screen</Text>
      </Link>
      <View className="absolute inset-0 items-center justify-center pointer-events-none">
        <MaterialCommunityIcons name="pirate" size={64} color="black" />
      </View>
    </SafeAreaView>
  );
}
