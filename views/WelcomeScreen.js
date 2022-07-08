import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bell-rock-bg.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-white-find-yourself.png")}
            style={styles.logo}
          />
        </View>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </ImageBackground>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 300,
    resizeMode: "contain",
    width: 300,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
});
