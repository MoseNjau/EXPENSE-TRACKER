// src/components/Login.js
import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Login = () => {
    const { login } = useGlobalContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            alert('User logged in successfully');
        } catch (err) {
            alert('Error logging in user');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;