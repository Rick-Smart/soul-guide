import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../views/AccountScreen";
import MessagesScreen from "../views/MessagesScreen";
import ServicesScreen from "../views/ServicesScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabNavigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
      }}
    >
      <Tab.Screen name="Schedule" component={ServicesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </TabNavigator>
  );
};

export default TabNavigator;
