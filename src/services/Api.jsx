import axios from "axios";

const Api = axios.create({
  baseURL: "https://jobdeploy-api.onrender.com",
});

export default Api;
