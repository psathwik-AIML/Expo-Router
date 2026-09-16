import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

// use local search params carry the params we send in dynamic  routes
const ProductPage = () => {
  const num = useLocalSearchParams();
  return (
    <View>
      <Text>Iam Product {num.idNum}</Text>
    </View>
  );
};

export default ProductPage;
