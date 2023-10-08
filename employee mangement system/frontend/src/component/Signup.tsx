import { Box, Button, Input, useToast } from '@chakra-ui/react'
import { useState } from 'react';
import { Toast } from './Toast';
import signupUser from '../utils/signupUser';


export const Signup = () => {

    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" })

    const toast = useToast();


    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }


    async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            return Toast({ toast, message: 'Confirm Password is not Matching', color: 'red' })
        }
        let response = await signupUser(form)

        Toast({ toast, message: response, color: 'blue' })
    }


    return (
        <Box>
            <form onSubmit={handleSignup}>
                <Box mt='1rem'>
                    <Input placeholder='Email Address' name='email' onChange={handleInput} type='email' required />
                </Box>
                <Box mt='1rem'>
                    <Input placeholder='Password' type='password' name='password' onChange={handleInput} required />
                </Box>
                <Box mt='1rem'>
                    <Input placeholder='Confirm Password' type='password' name='confirmPassword' onChange={handleInput} required />
                </Box>
                <Box mt='2rem'>
                    <Button type='submit' colorScheme='blue' w='100%'>Signup</Button>
                </Box>
            </form>
        </Box>
    )
}
