import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const AllParams = () => {
  let num = useLocalSearchParams();
  console.log(num);
  return (
    <View>
      <Text>AllParams</Text>
      <Text>Same Logic {num.allParams.join("/")}</Text>
    </View>
  );
};

export default AllParams;
