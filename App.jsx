import AuthNavigator from "./navigation/AuthNavigator";
import MessagesScreen from "./views/MessagesScreen";
import ServiceDetailsScreen from "./views/ServiceDetailsScreen";
import AccountScreen from "./views/AccountScreen";
import ServicesScreen from "./views/ServicesScreen";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import ServiceEditScreen from "./views/ServiceEditScreen";

import Screen from "./components/Screen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";

export default function App() {
  return <ServiceEditScreen />;
}
