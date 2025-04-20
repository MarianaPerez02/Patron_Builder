import axios from "axios";

const apiAxios = axios.create({
  baseURL: "https://localhost:4000/api",
});

export default apiAxios;
