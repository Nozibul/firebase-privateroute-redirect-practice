import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
// import useFirebase from '../../Firebase/useFirebase';

const Login = () => {
    // const {signInGoogle} = useFirebase()
    const {signInGoogle} = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInGoogle}>Sign In</button>
            <br />
           <NavLink to="/register">New User?</NavLink> {/* jodi login na hoa thake tahole tahole register chole jab eai link a gele */}
        </div>
    );
};

export default Login;