import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenView() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View>
        <Text className="screen-title">ScreenView</Text>
      </View>
    </SafeAreaView>
  );
}
