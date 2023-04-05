import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminOption = () => {
    return (
        <>
        <li>
            <NavLink to="/dashboard/allSellers" className={({isActive})=>isActive?'text-primary':'text-secondary'}>All Sellers</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/allBuyers" className={({isActive})=>isActive?'text-primary':'text-secondary'}>All Buyers</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/reportedItem" className={({isActive})=>isActive?'text-primary':'text-secondary'}>Reported Items</NavLink>
        </li>
        </>
    );
};

export default AdminOption;