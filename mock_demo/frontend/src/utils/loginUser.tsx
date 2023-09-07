import axios from "axios";

let api = 'https://ems-api-5j0f.onrender.com/login'


export interface User {
    email: string,
    password: string
}

export async function LoginUser(data: User) {
    try {
        let res = await axios.post(api, data)
        return res.data;
    } catch (err) {
        return err;
    }
}