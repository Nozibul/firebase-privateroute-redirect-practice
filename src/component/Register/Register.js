import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           
           <h2>Please Register</h2>
            <form>
                <input type="email" placeholder="your email"/> <br />
                <input type="password" name="password" placeholder="your password"/> <br />
                <input type="submit" value="submit"  />
            </form>
            <NavLink to="/login">Already Register???</NavLink>
        </div>
    );
};

export default Register;