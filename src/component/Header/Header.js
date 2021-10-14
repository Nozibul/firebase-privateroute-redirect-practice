import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
// import useFirebase from '../../Firebase/useFirebase';
import './header.css'

const Header = () => {

    const activeStyle={fontWeight: "bold",color: "red"}

    // const {user, logOut} = useFirebase()
    const {user, logOut} = useAuth()

    return (
        <div className="header">
            <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/shipping" activeStyle={activeStyle}>Shipping</NavLink>
            <NavLink to="/placeOrder" activeStyle={activeStyle}>Place Order</NavLink>
            <NavLink to="/register" activeStyle={activeStyle}>Register</NavLink>
            <NavLink to="/login" activeStyle={activeStyle}>LogIn</NavLink>

            {user?.email && <button onClick={logOut}>Log Out</button>}
            <span> {user?.displayName} </span>

        </div>
    );
};

export default Header;