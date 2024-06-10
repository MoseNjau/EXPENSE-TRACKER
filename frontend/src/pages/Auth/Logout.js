// src/components/Logout.js
import React from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';

const Logout = () => {
    const { logout } = useGlobalContext();

    const handleLogout = () => {
        logout();
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
