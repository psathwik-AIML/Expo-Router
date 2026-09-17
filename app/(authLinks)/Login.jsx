import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Pressable style={styles.button}>
        <Button title="profile" onPress={() => router.replace("/Profile")} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgreen",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
export default Login;
