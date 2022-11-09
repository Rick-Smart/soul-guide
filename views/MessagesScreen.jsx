import { FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

import messagesApi from "../api/messages";

// This data will be pulled from the Server on login and stored in our redux store.
const messagelist = [
  {
    id: 1,
    title: "message title 1",
    description: "message description",
    image: require("../assets/profile-image.jpg"),
    message: "Welcome to the wonderful world of debugging lol!",
  },
  {
    id: 2,
    title: "message title 2",
    description: "message description",
    image: require("../assets/profile-image.jpg"),
    message: "Howdy doodie!",
  },
  {
    id: 3,
    title: "message title 3",
    description: "message description",
    image: require("../assets/profile-image.jpg"),
    message: "Hello new user!",
  },
];

const MessagesScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(messagelist);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const response = messagesApi.getMessages();
    setMessages(response.data);
  };

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
            onPress={() =>
              navigation.navigate("MessageDetails", {
                details: item,
              })
            }
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
