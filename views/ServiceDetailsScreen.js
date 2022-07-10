import { StyleSheet, Image, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppText from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ServiceDetailsScreen = () => {
  return (
    <Screen>
      <Image
        style={styles.image}
        source={require("../assets/bell-rock-bg.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>App Services</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="Rick"
          subTitle="App Developer"
          image={require("../assets/profile-image.jpg")}
        />
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
    color: colors.dark,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
    alignSelf: "flex-start",
  },
});
