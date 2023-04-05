import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;