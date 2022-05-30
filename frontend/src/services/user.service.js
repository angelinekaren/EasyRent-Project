import axios from "axios";
import authHeader from "../helpers/auth-header";

function getAll() {
  return axios.get("http://localhost:5000/admin", { headers: authHeader() });
}

export const userService = {
  getAll,
};
