import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
