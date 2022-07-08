import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Screen from "../components/Screen";

import colors from "../config/colors";

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bell-rock-bg.jpg")}
      >
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
