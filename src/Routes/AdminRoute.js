import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../Hook/useRole';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [role,isRoleLoading,isVerify] = useRole(user?.email)
    const location = useLocation()

    if(loading || isRoleLoading){
        return <Spinner></Spinner>
    }
    if(role==='admin'){
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default AdminRoute;