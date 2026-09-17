import { View } from "react-native";
import Home from "../../app/(app)/Home";
// route groups is a expo router feature which is used to combine and organize the routes with same category
// it wont effect url
// syntax: keep name in parenthesis ex: (auth)
const RouteGroups = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default RouteGroups;
