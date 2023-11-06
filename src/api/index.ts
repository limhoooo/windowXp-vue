import axios from "axios";

const baseURL = "https://window-6d51a-default-rtdb.firebaseio.com/";
const API = axios.create({
  baseURL,
  headers: {},
});

export { API };
