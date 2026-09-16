import { Link } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text>Products Page</Text>
      <Link href="/Products/1">Product 1</Link>
      <Link href="/Products/2">Product 2</Link>
      <Link href="/Products/3">Product 3</Link>
    </View>
  );
};

export default index;
