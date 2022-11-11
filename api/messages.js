import client from "./client";

const endPoint = "/messages";
const userMessages = "/usermessages";

const createMessage = (message) => client.post(endPoint, message);

const getMessages = () => client.get(endPoint + userMessages);

export default {
  getMessages,
  createMessage,
};
