// src/components/Logout.js
import React from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';

// Logout component handles user logout functionality
const Logout = () => {
    const { logout } = useGlobalContext();

    // Function to handle user logout
    const handleLogout = () => {
        logout();
    };

    // Render logout button with onClick handler
    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout; // Export Logout component for use in other parts of the application
