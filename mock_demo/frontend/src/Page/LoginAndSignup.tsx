import { Box, Button, Heading } from "@chakra-ui/react"
import { Login } from "../component/Login"
import { Signup } from "../component/Signup"
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const LoginAndSignup = () => {
    const [showBox, setShowBox] = useState('login')
    const location = useLocation();
    const navigate = useNavigate();

    function toggleButton(value: string) {
        setShowBox(value)
        if (value == 'login') {
            navigate('/login')
        } else if (value == 'signup') {
            navigate('/signup')
        }
    }

    useEffect(() => {
        if (location.pathname == "/login") {
            setShowBox('login')
        } else if (location.pathname == "/signup") {
            setShowBox('signup')
        }
    }, [location.pathname])


    return (
        <Box bg='blue.300' h='100vh' display='flex' justifyContent='center' alignItems='center' >
            <Box bg='white' padding='2rem' w='40vw' outline={'1px solid'} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px">
                <Box textAlign='center'>
                    <Heading size='lg'>{showBox == 'login' ? 'Login Form' : 'Signup Form'}</Heading>
                </Box>
                <Box mt='3rem' display='flex' justifyContent='space-between'>
                    <Button w='40%' onClick={() => toggleButton('login')} colorScheme={showBox == 'login' ? 'blue' : 'gray'} outline='1px solid'>Login</Button>
                    <Button w='40%' onClick={() => toggleButton('signup')} colorScheme={showBox == 'signup' ? 'blue' : 'gray'} outline='1px solid'>Signup</Button>
                </Box>
                <Box>
                    {showBox == 'login' ? <Login /> : <Signup />}
                </Box>
            </Box>
        </Box>
    )
}
