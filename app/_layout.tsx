import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(app)/Home" />
      <Stack.Screen name="About" />
    </Stack>
  );
}
