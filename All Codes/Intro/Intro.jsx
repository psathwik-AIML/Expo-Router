import { Text, View } from "react-native";

const Intro = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: "red", fontWeight: 500 }}>
        Intro:
      </Text>
      <Text>
        expo router is a react navigaton library built on top of react
        navigation and its maily on file based routing easy to manage
      </Text>
    </View>
  );
};

export default Intro;
