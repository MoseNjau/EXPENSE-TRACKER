/**
 * @file PrivateRoute.js
 * 
 * PrivateRoute Component ensures that children components are only accessible
 * to authenticated users. If the user is not authenticated, it redirects
 * them to the login page using the Navigate component from React Router.
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';

/**
 * PrivateRoute Component
 * 
 * @param {Object} children - The components or elements to render if user is authenticated.
 * @returns {JSX.Element} - Redirects to login page if user is not authenticated.
 */
const PrivateRoute = ({ children }) => {
    const { user } = useGlobalContext();

    // Render children if user is authenticated, otherwise redirect to /login
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
