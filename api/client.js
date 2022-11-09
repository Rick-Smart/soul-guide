import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.32:3001/api",
});

apiClient.get("/listings").then((response) => {
  if (!response.problem) {
    console.log(response.problem);
  }
});

export default apiClient;
