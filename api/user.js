import client from "./client";

const endPoint = "/users";

const registerUser = (user) => client.post(endPoint, user);

const getUserById = (id) => client.get(endPoint + "/" + id);

export default {
  registerUser,
  getUserById,
};
