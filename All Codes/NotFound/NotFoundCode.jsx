import { Text, View } from "react-native";
import Home from "../../app/Home";
// we can create custom not found pages if user goes to not existing route
// two types
// 1.scope level
// 2.global level
// syntax is : +not-found.jsx
const NotFoundCode = () => {
  return (
    <View>
      <Text>NotFoundCode</Text>
      <Home />
    </View>
  );
};

export default NotFoundCode;
