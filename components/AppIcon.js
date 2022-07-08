import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({ name, size, color }) => {
  return (
    <View>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({});
