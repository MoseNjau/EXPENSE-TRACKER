// src/components/PublicRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';

const PublicRoute = ({ children }) => {
  const { user } = useGlobalContext();

  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
