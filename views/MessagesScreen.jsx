import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messagelist = [
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
  const [messages, setMessages] = useState(messagelist);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((item) => item.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log("message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(messagelist);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  rightActions: {
    width: 70,
    backgroundColor: colors.danger,
  },
});
