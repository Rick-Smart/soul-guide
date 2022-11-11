import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import UserHeader from "../components/UserHeader";

// This will be pulled from the server once we know what services are being offered.
const services = [
  {
    id: 1,
    title: "Massage",
    price: 100,
    image: require("../assets/massage-service.jpg"),
  },
  {
    id: 2,
    title: "Soul Guide Session",
    price: "Free",
    image: require("../assets/soul-guide-session-service.jpg"),
  },
  {
    id: 3,
    title: "Guided Meditation",
    price: "150",
    image: require("../assets/guided-meditation.jpg"),
  },
];

const ServicesScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <UserHeader onPress={() => navigation.navigate("Account")} />
      <FlatList
        data={services}
        keyExtractor={(services) => services.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$ " + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  screen: {
    padding: 10,
  },
});
