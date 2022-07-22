import React, { useState } from "react";

import AuthNavigator from "./navigation/AuthNavigator";
import MessagesScreen from "./views/MessagesScreen";
import ServiceDetailsScreen from "./views/ServiceDetailsScreen";
import AccountScreen from "./views/AccountScreen";
import ServicesScreen from "./views/ServicesScreen";
import LoginScreen from "./views/LoginScreen";

import Screen from "./components/Screen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";

const catagories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return <LoginScreen />;
}
