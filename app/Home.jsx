import { Link } from "expo-router";
import { Text, View } from "react-native";
const Home = () => {
  return (
    <View>
      <Text style={{ color: "red", fontSize: 30 }}>Home</Text>
      <Link href="/About">About</Link>
      <Link href="/Profile">Profile</Link>
      <Link href="/Products">Products</Link>
    </View>
  );
};

export default Home;
