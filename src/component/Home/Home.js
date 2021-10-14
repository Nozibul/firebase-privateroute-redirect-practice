import React from 'react';
import useAuth from '../../Firebase/useAuth';


const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2>UserName: {user.displayName}</h2>
        </div>
    );
};

export default Home;