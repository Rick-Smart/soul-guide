import { FlatList, StyleSheet, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import AppMessages from "../components/AppMessages";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import UserHeader from "../components/UserHeader";

import colors from "../config/colors";

import messagesApi from "../api/messages";

const MessagesScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const response = await messagesApi.getMessages();
    setMessages(response.data);
  };

  // this logic needs to be handled by the server.
  const handleDelete = (message) => {
    setMessages(messages.filter((item) => item.id !== message.id));
  };

  return (
    <ImageBackground
      source={require("../assets/bell-rock-bg.jpg")}
      style={styles.imageBackground}
      blurRadius={2}
    >
      <Screen>
        <UserHeader onPress={() => navigation.navigate("Account")} />
        <FlatList
          data={messages}
          keyExtractor={(message) => message._id.toString()}
          renderItem={({ item }) => (
            <AppMessages
              user={item.user}
              title={item.title}
              renderRightActions={() => (
                <ListItemDeleteAction
                  onPress={() => handleDeleteMessage(item)}
                />
              )}
              onPress={() => navigation.navigate("MessageDetails", item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages(messages);
          }}
        />
      </Screen>
    </ImageBackground>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  rightActions: {
    width: 70,
    backgroundColor: colors.danger,
  },
});
