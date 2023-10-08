import { Navigate } from "react-router-dom"
import { Toast } from "../component/Toast"
import { useToast } from "@chakra-ui/react"

export const PrivateRoute = ({ children }: any) => {
    const toast = useToast()
    const token = localStorage.getItem('token')
    if (!token) {
        Toast({toast,message:"Please Login to access Dashboard Page",color:'red'})
        return <Navigate to="/login" />
    }
    return <>{children}</>

}
