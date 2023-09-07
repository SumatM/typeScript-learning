import { Box, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <Box padding={3} pos={'fixed'} top={0} w='100%' bg='white' zIndex={99} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <Box display='flex' justifyContent='space-between' justifyItems={'center'}>
                <Box>
                    <Heading size='md' color={'blueviolet'}>E.M.S</Heading>
                </Box>
                <Box display={'flex'} justifyContent='space-around' w='50vw'>
                    <Link to='/dashboard'><Heading size={'sm'}>Dashboard</Heading></Link>
                    <Link to='/signup'><Heading size={'sm'}>SignUp</Heading></Link>
                    <Link to='/login'><Heading size={'sm'}>LogIn</Heading></Link>
                </Box>
            </Box>
        </Box>
    )
}
