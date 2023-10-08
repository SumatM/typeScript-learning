import { Box } from '@chakra-ui/react'
import './App.css'
import { NavBar } from './component/NavBar'
import { AllRoute } from './route/AllRoute'

function App() {

  return (
    <div>
    <NavBar/>
    <Box mt='60px'>
    <AllRoute/>
    </Box>
    </div>
  )
}

export default App
