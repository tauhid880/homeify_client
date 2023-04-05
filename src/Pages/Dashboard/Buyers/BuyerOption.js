import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const BuyerOption = () => {
    return (
      <>
        <li>
            <NavLink to="/dashboard/myOrders" className={({isActive})=>isActive?'text-primary':'text-secondary'}>My Orders</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/myWishList" className={({isActive})=>isActive?'text-primary':'text-secondary'}>My WishList</NavLink>
        </li>
        <li>
        <NavLink to="/dashboard/sentRequest" className={({isActive})=>isActive?'text-primary':'text-secondary'}>Send Request</NavLink>
        </li>
      </>
    );
};

export default BuyerOption;
