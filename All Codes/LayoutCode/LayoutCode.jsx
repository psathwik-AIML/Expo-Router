import { View } from "react-native";
import Home from "../../app/Home";
// layout wraps all pages so that it share common components for all routes
// syntax is : _layout.jsx
const LayoutCode = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default LayoutCode;
