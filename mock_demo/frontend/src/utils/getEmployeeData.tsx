import axios from "axios"


export interface Employee {
  createdAt: string,
  department: string,
  email: string,
  fname: string,
  lname: string,
  salary: number,
  _id: string,
  updatedAt: string
}

export async function getEmployeeData(apiLink: string) {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const res = await axios.get(apiLink, { headers });

    return res.data;
  } catch (err) {
    return err;
  }
}


