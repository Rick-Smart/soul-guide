import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const AppButton = ({ title, color = "primary", onPress, ...otherProps }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors[color] },
        { ...otherProps },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
