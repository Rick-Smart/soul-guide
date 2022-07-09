import { StyleSheet, Image, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppText from "../components/AppText";

import colors from "../config/colors";

const ServiceDetailsScreen = () => {
  return (
    <Screen>
      <Image
        style={styles.image}
        source={require("../assets/bell-rock-bg.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Massage</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </Screen>
  );
};

export default ServiceDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 25,
  },
  detailsContainer: {
    padding: 20,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
});
