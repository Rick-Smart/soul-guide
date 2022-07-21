import React from "react";
import { FlatList, StyleSheet, View, ImageBackground } from "react-native";

import Screen from "../components/Screen";
import AppIcon from "../components/AppIcon";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

// move this to the config folder
const menuItems = [
  {
    title: "My Appointments",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/bell-rock-bg.jpg")}
      style={styles.ImageBackground}
      blurRadius={2}
    >
      <Screen>
        <View style={styles.container}>
          <ListItem
            title="Rick Smart"
            subTitle="rick.smart13@gmail.com"
            image={require("../assets/profile-image.jpg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => console.log(item.title)}
                ImageComponent={
                  <AppIcon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
        <View style={styles.container}>
          <ListItem
            title="Log Out"
            onPress={() => console.log("Log Out")}
            ImageComponent={
              <AppIcon name="logout" backgroundColor={colors.medium} />
            }
          />
        </View>
      </Screen>
    </ImageBackground>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "rgba(248, 244, 244, 0.75)",
  },
  ImageBackground: {
    flex: 1,
  },
});
