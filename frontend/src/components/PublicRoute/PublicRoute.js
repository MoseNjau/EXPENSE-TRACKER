/**
 * File: src/components/PublicRoute.js
 * Description: Defines a React component for handling public routes.
 */

import React from 'react'; // Importing React library
import { Navigate } from 'react-router-dom'; // Importing Navigate component for navigation
import { useGlobalContext } from '../../Context/GlobalContext'; // Importing useGlobalContext for accessing global state

/**
 * PublicRoute Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The child components to render if user is not authenticated
 * 
 * @returns {JSX.Element} JSX representation of the PublicRoute component
 */
const PublicRoute = ({ children }) => {
  const { user } = useGlobalContext(); // Accessing user information from global context

  // Render Navigate component to /dashboard if user is authenticated, otherwise render children
  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute; // Exporting PublicRoute component as default
