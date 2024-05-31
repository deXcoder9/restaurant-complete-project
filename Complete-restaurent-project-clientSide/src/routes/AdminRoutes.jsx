import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const {userInfo,loading } = useAuth()
    const location = useLocation() 
    if(loading ||  isAdminLoading ){
        return <progress className="progress w-56"></progress>
    }

    if(userInfo && isAdmin ){
        return children
    }
  return <Navigate to="/login" state={{from: location}} ></Navigate>
};

export default AdminRoutes;