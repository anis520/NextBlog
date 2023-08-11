import axios from "axios";
import { httpAxios } from "../helper/HttpHelper";

export async function Singup(user) {
  const result = await axios
    .post("https://devs-school.vercel.app/api/user", user)
    .post("http://localhost:3000/api/user", user)
    .then((res) => res.data);
  return result;
}
export async function login(user) {
  const result = await axios
    .post("https://devs-school.vercel.app/api/login", user)
    // .post("http://localhost:3000/api/login", user)
    .then((res) => res.data);
  return result;
}
export async function logout() {
  const result = await axios
    .get("https://devs-school.vercel.app/api/logout")
    .get("http://localhost:3000/api/logout")
    .then((res) => res.data);
  return result;
}
export async function me() {
  const result = await axios
    .get("https://devs-school.vercel.app/api/logout")
    .get("http://localhost:3000/api/me")
    .then((res) => res.data);
  return result;
}
