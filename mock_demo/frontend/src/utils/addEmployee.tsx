import axios from "axios";

export let api = 'http://localhost:8080/employee'

export interface Employee {
  department: string,
  email: string,
  fname: string,
  lname: string,
  salary: number,
  _id?: string
}

export async function addEmployee(employeeDetails: Employee) {
  try {
    delete employeeDetails["_id"]
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`
    }

    let res = await axios.post(api, employeeDetails, { headers })
    return res.data;
  } catch (err) {
    return err;
  }
}