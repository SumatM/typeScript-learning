import axios from "axios";

let api = "http://localhost:8080/logout";

export async function logoutUser(token: string) {
  let res = await axios.post(`${api}/`, { token });
  return res.data;
}
