import React from "react";
import { SafeAreaView, StyleSheet, View, ImageBackground } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <ImageBackground
      source={require("../assets/bell-rock-bg.jpg")}
      style={styles.imageBackground}
      blurRadius={2}
    >
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
