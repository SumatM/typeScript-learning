import axios from 'axios'

let api = 'https://ems-api-5j0f.onrender.com/signup'

interface SignupDetails {
   email: string,
   password: string,
   confirmPassword: string
}

const signupUser = async (userDetails: SignupDetails) => {
   let res = await axios.post(api, userDetails)
   //    console.log(res)
   return res.data.message;
}

export default signupUser