import axios from "axios";

let api = 'http://localhost:8080/employee/'

export interface Employee {
  department: string,
  email: string,
  fname: string,
  lname: string,
  salary: number,
  _id: string
}

export async function updateEmployee(employeeDetails: Employee, id: string) {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    let res = await axios.patch(`${api}${id}`, employeeDetails, { headers },)
    return res.data;
  } catch (err) {
    console.log(err);
  }
}