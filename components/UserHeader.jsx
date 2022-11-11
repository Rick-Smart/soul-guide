import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

import useAuth from "../auth/useAuth";

export default function UserHeader({ IconComponent, onPress }) {
  const { user } = useAuth();
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        <MaterialCommunityIcons
          name="chevron-left"
          size={25}
          color={colors.medium}
        />

        <Image style={styles.image} source={user.image} />

        <View style={styles.detailsContainer}>
          {user.name && (
            <AppText style={styles.title} numberOfLines={1}>
              {user.name}
            </AppText>
          )}
          {user.email && (
            <AppText numberOfLines={2} style={styles.subTitle}>
              {user.email}
            </AppText>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.whiteTransparent,
    borderRadius: 15,
    marginVertical: 15,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.subTitle,
  },
});
