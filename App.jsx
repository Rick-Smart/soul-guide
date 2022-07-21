import AuthNavigator from "./navigation/AuthNavigator";
import MessagesScreen from "./views/MessagesScreen";
import ServiceDetailsScreen from "./views/ServiceDetailsScreen";
import AccountScreen from "./views/AccountScreen";
import ServicesScreen from "./views/ServicesScreen";

import Screen from "./components/Screen";
import AppTextInput from "./components/AppTextInput";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="testing" />
    </Screen>
  );
}
