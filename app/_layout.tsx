import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "red" }}>
        <Text>Header Content</Text>
      </View>
      <Stack />
      <View style={{ backgroundColor: "yellow" }}>
        <Text>Footer Content</Text>
      </View>
    </SafeAreaView>
  );
}
