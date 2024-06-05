// src/components/Signup.js
import React, { useState } from 'react';
import { useGlobalContext } from '../../context/globalContext';

const Signup = () => {
    const { register } = useGlobalContext();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            alert('User registered successfully');
        } catch (err) {
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
