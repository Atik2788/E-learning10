import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {




    const authInfo = {user: "akash"}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;