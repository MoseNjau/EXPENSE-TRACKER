// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';

const PrivateRoute = ({ children }) => {
    const { user } = useGlobalContext();

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
