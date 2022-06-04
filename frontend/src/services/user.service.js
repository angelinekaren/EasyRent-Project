import axios from "axios";
import authHeader from "../helpers/auth-header";

function getAll() {
  return axios.get("/api/admin", { headers: authHeader() });
}

export const userService = {
  getAll,
};
