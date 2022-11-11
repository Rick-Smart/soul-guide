import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import * as Yup from "yup";

import userApi from "../api/user";
import useAuth from "../auth/useAuth";

import Screen from "../components/Screen";
import ErrorMessage from "../components/forms/ErrorMessage";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  const [registerFailed, setRegisterFailed] = useState(false);
  const { logIn } = useAuth();

  const handleRegister = async (values) => {
    const result = await userApi.registerUser(values);
    if (!result.ok) return setRegisterFailed(result.data.error);
    else {
      setRegisterFailed("An unexpected error occurred.");
    }
    setRegisterFailed(false);

    logIn(result.data);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-white-find-yourself.png")}
          style={styles.logo}
        />
      </View>

      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.ErrorMessage}>
          <ErrorMessage
            error="Invalid Email/Password"
            visible={registerFailed}
          />
        </View>
        <AppFormField
          name="name"
          autoCorrect={false}
          placeholder="Name"
          icon="account"
          textContentType="name"
        />
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
          <SubmitButton title="Register" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

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
});
