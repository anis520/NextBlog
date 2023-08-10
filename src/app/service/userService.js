import axios from "axios";
import { httpAxios } from "../helper/HttpHelper";

export async function Singup(user) {
  const result = await axios
    .post("http://localhost:3000/api/user", user)
    .then((res) => res.data);
  return result;
}
export async function login(user) {
  const result = await axios
    .post("http://localhost:3000/api/login", user)
    .then((res) => res.data);
  return result;
}
export async function logout() {
  const result = await axios
    .get("http://localhost:3000/api/logout")
    .then((res) => res.data);
  return result;
}
