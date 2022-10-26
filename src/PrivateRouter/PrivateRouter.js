import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';


const PrivateRouter = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    // console.log(user);
    
    const location = useLocation();

    if(loading){
        <progress className="progress progress-primary w-56" value="100" max="100"></progress>
    }

    if(!user) {
        return  <Navigate to='/login' state={{from: location}} replace></Navigate>
   }
    return children
};

export default PrivateRouter;