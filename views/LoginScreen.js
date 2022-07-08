import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bell-rock-bg.jpg")}
      >
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </ImageBackground>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
