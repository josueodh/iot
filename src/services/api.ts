import axios from "axios";

const api = axios.create({
  baseURL: "https://iot-backend-ufjf.herokuapp.com/",
});

export default api;
