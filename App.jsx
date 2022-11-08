import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, View } from "react-native";

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
import AppButton from "./components/AppButton";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return <AuthNavigator />;
}
