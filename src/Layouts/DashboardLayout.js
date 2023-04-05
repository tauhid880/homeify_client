import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../Hook/useRole';
import AdminOption from '../Pages/Dashboard/Admin/AdminOption';
import BuyerOption from '../Pages/Dashboard/Buyers/BuyerOption';
import SellerOption from '../Pages/Dashboard/Sellers/SellerOption';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [role,isRoleLoading] = useRole(user?.email)
    
    if(isRoleLoading){
        return <Spinner></Spinner>
    }
   
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-end justify-start md::justify-center bg-accent">
                    <div className='flex justify-end'>
                    <label htmlFor="my-drawer-2" className="btn bg-primary border-none drawer-button lg:hidden mr-5 sm:mr-10">Menu</label>
                    </div>
                    <div className='w-full lg:mt-16'>
                    <Outlet></Outlet>
                    </div>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 space-y-0 w-80 bg-base-100 text-base-content text-lg font-semibold pl-16 font-jost capitalize">
                    {
                        user?.uid && <li>
                        <div className='grid grid-cols-1'>
                        <img src={user?.photoURL ? user?.photoURL : 'https://ibb.co/D9cMPk9'} alt="" className='w-24 h-24 rounded-full object-cover' />
                        <h3 className='text-secondary text-xl mb-5'>{user?.displayName} {`(${role})`}</h3>
                        </div>
                    </li>
                    }
                    {
                        role==='buyer' &&  <BuyerOption></BuyerOption>
                    }
                    {
                        role==='seller' && <SellerOption></SellerOption>
                    }
                    {
                        role==='admin' && <AdminOption></AdminOption>
                    }
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;