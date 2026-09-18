import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="HomeTab"
        options={{
          title: "Home Page",
          headerStyle: { backgroundColor: "pink" },
          tabBarIcon: ({ size }) => <FontAwesome name="home" size={size} />,
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        options={{
          title: "Profile Page",
          headerStyle: { backgroundColor: "lightgreen" },
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsTab"
        options={{
          title: "Settings Page",
          headerStyle: { backgroundColor: "skyblue" },
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="truck" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
