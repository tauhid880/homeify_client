import React from 'react';
import { useContext } from 'react';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';
import useRole from '../../Hook/useRole';
import Lottie from "lottie-react";
import welcome from '../../assets/animation/welcome.json'
import { useTitle } from '../../Hook/useTitle';

const Dashboard = () => {
    useTitle('Dashboard')
    const {user} = useContext(AuthContext)
    const  [role,isRoleLoading,isVerify] = useRole(user?.email)
    if(isRoleLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='flex min-h-[60vh] justify-center items-center'>
          <Lottie animationData={welcome} loop={true}></Lottie> 
        </div>
    );
};

export default Dashboard;