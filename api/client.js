import { create } from "apisauce";
import authStorage from "../auth/storage";

import { LOCAL_API } from "@env";

// LOCAL_API
// "http://192.168.0.32:3001/api"

const apiClient = create({
  baseURL: LOCAL_API,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
