
import axios from "axios";
import { api } from "./addEmployee";



export async function deleteEmployee(id: string) {
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`
        }

        let res = await axios.delete(`${api}/${id}`, { headers })
        return res.data;
    } catch (err) {
        return err;
    }

}