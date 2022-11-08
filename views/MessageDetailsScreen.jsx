import React from "react";
import AppText from "../components/AppText";

import Screen from "../components/Screen";

const MessageDetailsScreen = ({ route }) => {
  const messageDetails = route.params.details;

  console.log(messageDetails);

  return (
    <Screen>
      <AppText>{messageDetails.message}</AppText>
    </Screen>
  );
};

export default MessageDetailsScreen;
