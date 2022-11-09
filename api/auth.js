import client from "./client";

const endPoint = "/users/auth";

const loginUser = (user) => client.post(endPoint, user);

export default {
  loginUser,
};
