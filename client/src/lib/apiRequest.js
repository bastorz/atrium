import axios from "axios";

const apiRequest = axios.create({
  baseUrl: "http://localhost:8000/api",
  withCredentials: true,
});

export default apiRequest;
