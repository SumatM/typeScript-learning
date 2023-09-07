import axios from "axios";

let api = 'http://localhost:8080/login'


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