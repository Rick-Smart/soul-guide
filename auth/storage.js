import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing the auth token: " + error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("error getting the auth token: " + error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    if (token) return jwtDecode(token);
    return null;
  } catch (error) {
    console.log("error getting the user: " + error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error deleting the auth key: " + error);
  }
};

export default {
  storeToken,
  getUser,
  removeToken,
  getToken,
};
