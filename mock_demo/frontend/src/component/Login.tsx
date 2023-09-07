import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { LoginUser } from '../utils/loginUser';
import { Toast } from './Toast';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

  const [form, setForm] = useState({ email: "", password: "" })

  const toast = useToast();

  const navigate = useNavigate();


  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let response = await LoginUser(form)

    if (response.message == 'Login Sucessful') {
      localStorage.setItem('token', response?.token)
      Toast({ toast, message: response.message, color: 'green' })
      navigate('/dashboard')
    } else {
      Toast({ toast, message: response.message, color: 'red' })
    }
  }

  return (
    <Box>
      <form onSubmit={handleLogin}>
        <Box mt='1rem'>
          <Input type='email' placeholder='Email Address' name="email" onChange={handleInput} required />
        </Box>
        <Box mt='1rem'>
          <Input type='password' placeholder='Password' name='password' onChange={handleInput} required />
        </Box>
        <Box mt="0.8rem">
          <Text>Forgot Password</Text>
        </Box>
        <Box mt='2rem'>
          <Button type='submit' w='100%' colorScheme='blue'>Login</Button>
        </Box>
      </form>
      <Box mt='2rem' display='flex' justifyContent='center' alignItems='center'>
        <Text>
          Not a member? <Link to='/signup'>Sign Up</Link>
        </Text>
      </Box>
    </Box>
  )
}
