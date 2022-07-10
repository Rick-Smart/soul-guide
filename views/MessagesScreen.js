import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "message title 1",
    description: "message description",
    image: require("../assets/profile-image.jpg"),
  },
  {
    id: 2,
    title: "message title 2",
    description: "message description",
    image: require("../assets/profile-image.jpg"),
  },
  {
    id: 3,
    title: "message title 3",
    description: "message description",
    image: require("../assets/profile-image.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              image={item.image}
              subTitle={item.description}
              onPress={() => console.log("message Selected", item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  messagesContainer: {},
});
