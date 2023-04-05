import React from 'react';
import { NavLink } from 'react-router-dom';

const SellerOption = () => {
    return (
        <>
        <li>
            <NavLink to="/dashboard/addProduct" className={({isActive})=>isActive?'text-primary':'text-secondary'}>
            Add A product
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/myProducts" className={({isActive})=>isActive?'text-primary':'text-secondary'}>
            My Products
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/myBuyers" className={({isActive})=>isActive?'text-primary':'text-secondary'}>
            My buyers
            </NavLink>
        </li>
        <li>
        <NavLink to="/dashboard/sentRequest" className={({isActive})=>isActive?'text-primary':'text-secondary'}>Send Request</NavLink>
        </li>
      </>
    );
};

export default SellerOption;