import { Link } from "expo-router";
import { Text, View } from "react-native";

// stack navigation is like back and front direction
const StackNavigationCode = () => {
  return (
    <View>
      <Text>StackNavigationCode</Text>
      <Link href="/Home">Home Page</Link>
    </View>
  );
};

export default StackNavigationCode;
