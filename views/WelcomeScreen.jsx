import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-white-find-yourself.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  screen: {
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 100,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 300,
  },
});
