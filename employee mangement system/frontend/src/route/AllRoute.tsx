import { Routes, Route } from 'react-router-dom'
import { LoginAndSignup } from '../Page/LoginAndSignup'
import { Dashboard } from '../Page/Dashboard'
import { PrivateRoute } from './PrivateRoute'

export const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginAndSignup />}></Route>
      <Route path='/login' element={<LoginAndSignup />}></Route>
      <Route path='/signup' element={<LoginAndSignup />}></Route>
      <Route path='/dashboard/' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
    </Routes>
  )
}
