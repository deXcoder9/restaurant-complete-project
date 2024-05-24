import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';


const ProtectedRoute = ({children}) => {
    const {userInfo, loading} = useContext(AuthContext)
    const locatiom = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(userInfo){
        return children
    }
  return <Navigate to="/login" state={{from: locatiom}} ></Navigate>
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
}

export default ProtectedRoute