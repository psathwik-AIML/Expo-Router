import { Link } from "expo-router";
import { Text, View } from "react-native";
const Home = () => {
  return (
    <View>
      <Text style={{ color: "red", fontSize: 30 }}>Home</Text>
      <Link href="/About">About</Link>
      <Link href="/Profile">Profile</Link>
      <Link href="/Profile/h/i">Local Notfound</Link>
      <Link href="/Products">Products</Link>
      <Link href="/Products/bestseller/samsung">best seller -samsung </Link>
      <Link href="/Products/goodrate/samsung">good rate -samsung </Link>
      <Link href="/Products/highdemand/samsung">high demand -samsung </Link>
      <Link href="/Register">Register</Link>
      <Link href="/Login">Login</Link>
      <Link href="/hi">global scope -notfound</Link>
    </View>
  );
};

export default Home;
