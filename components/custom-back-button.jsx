import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export function CustomBackButton() {
  return (
    <Pressable
      onPress={() => {
        if (router.canGoBack()) router.back();
        else router.replace("/(tabs)"); // fallback if no history
      }}
    >
      <Text>Back</Text>
    </Pressable>
  );
}
