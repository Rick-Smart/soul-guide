import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const [loginFailed, setLoginFailed] = useState(false);

  // this is where our login logic is happening
  const handleLogin = async (values) => {
    const result = await authApi.loginUser(values);
    if (!result.ok) return setLoginFailed(result.problem);

    setLoginFailed(false);
    console.log("Result.data: " + result.data);
    const user = JSON.stringify(jwtDecode(result.data));
    console.log("User decoded: " + user);
    // navigation.navigate("AppNavigator");
  };

  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/bell-rock-bg.jpg")}
    >
      <Screen style={styles.screen}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-white-find-yourself.png")}
            style={styles.logo}
          />
        </View>

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          <View style={styles.ErrorMessage}>
            <ErrorMessage
              error="Invalid Email/Password"
              visible={loginFailed}
            />
          </View>
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email-address"
            icon="email"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
            icon="lock"
            textContentType="password"
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Login" />
          </View>
        </AppForm>
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
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    width: "100%",
    alignSelf: "center",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
  ErrorMessage: {
    alignItems: "center",
  },
});
