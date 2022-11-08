import { TabRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../views/AccountScreen";
import MessageDetailsScreen from "../views/MessageDetailsScreen";
import MessagesScreen from "../views/MessagesScreen";
import ServicesScreen from "../views/ServicesScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Account"
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="MessageDetails" component={MessageDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
