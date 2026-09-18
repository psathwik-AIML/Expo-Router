import { StyleSheet, Text, View } from "react-native";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 30,
    fontWeight: 600,
  },
});
