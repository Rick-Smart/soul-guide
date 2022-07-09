import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/bell-rock-bg.jpg")}
    >
      <Screen style={styles.screen}>
        <TextInput
          onChangeText={(input) => setEmail(input)}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(input) => setPasword(input)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" color="secondary" />
        </View>
      </Screen>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  screen: {
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "100%",
  },
});
