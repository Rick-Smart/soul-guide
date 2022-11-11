import React from "react";
import { FlatList, StyleSheet, View, ImageBackground } from "react-native";

import Screen from "../components/Screen";
import AppIcon from "../components/AppIcon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import colors from "../config/colors";
import accountMenu from "../config/accountMenu";

import useAuth from "../auth/useAuth";

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <ImageBackground
      source={require("../assets/bell-rock-bg.jpg")}
      style={styles.ImageBackground}
      blurRadius={2}
    >
      <Screen>
        <View style={styles.container}>
          <ListItem
            title={user.name}
            subTitle={user.email}
            image={require("../assets/profile-image.jpg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={accountMenu}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => navigation.navigate(item.nav)}
                ImageComponent={
                  <AppIcon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
        <View style={styles.logOut}>
          <ListItem
            title="Log Out"
            onPress={() => logOut()}
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
    backgroundColor: "rgba(248, 244, 244, 0)",
  },
  ImageBackground: {
    flex: 1,
  },
  logOut: {
    marginVertical: 20,
    backgroundColor: "rgba(248, 244, 244, 0.75)",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
