import { Link, Redirect } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
// asChild is a prop it shares behaviour of parent (Link)
const code = () => {
  const isLogin = true;
  if (!isLogin) {
    return <Redirect href="/Login" />;
  }
  return (
    <View>
      <Text>Navigation</Text>
      <Link href="/Login" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "skyblue",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
export default code;
