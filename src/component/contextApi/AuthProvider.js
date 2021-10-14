import React, {  createContext } from 'react';
import useFirebase from '../../Firebase/useFirebase';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    // const {children} = props  // ata lekha r upore er moto lekha same

    // useFirebase func ta k call kore akhane sob kaj gulo k nia ase dynamic value hiseb use korbo
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            
                {children}
           
        </AuthContext.Provider>
    );
};

export default AuthProvider;