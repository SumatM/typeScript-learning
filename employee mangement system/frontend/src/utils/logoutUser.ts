import axios from "axios";

let api = "https://ems-api-5j0f.onrender.com/logout";

export async function logoutUser(token: string) {
  let res = await axios.post(`${api}/`, { token });
  return res.data;
}
