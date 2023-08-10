import axios from "axios";
import { httpAxios } from "../helper/HttpHelper";

export async function Singup(user) {
  const result = await axios
    .post("https://devs-school.vercel.app/api/user", user)
    .then((res) => res.data);
  return result;
}
export async function login(user) {
  const result = await axios
    .post("https://devs-school.vercel.app/api/login", user)
    .then((res) => res.data);
  return result;
}
export async function logout() {
  const result = await axios
    .get("https://devs-school.vercel.app/api/logout")
    .then((res) => res.data);
  return result;
}
