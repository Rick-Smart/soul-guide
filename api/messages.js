import client from "./client";

const endPoint = "/messages";

const getMessages = () => client.get(endPoint);

export default {
  getMessages,
};
