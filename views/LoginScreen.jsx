import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
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
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
    width: 300,
    height: 300,
  },
});
