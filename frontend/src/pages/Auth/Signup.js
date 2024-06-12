// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';
import styled from 'styled-components';

// Signup component handles user registration
const Signup = () => {
    const { register } = useGlobalContext();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle user registration
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            alert('User registered successfully');
            navigate('/login'); // Redirect to login page
        } catch (err) {
            alert('Error registering user');
        }
    };

    // Render signup form with inputs and submit button
    return (
        <SignupStyled>
            <form onSubmit={handleSignup}>
                <h2>Signup</h2>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">Signup</button>
            </form>
        </SignupStyled>
    );
};

// Styled component for the Signup form
const SignupStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;

    form {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
        text-align: center;

        h2 {
            margin-bottom: 1.5rem;
            color: #333;
        }

        input {
            width: calc(100% - 20px);
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
            color: #333;
            display: block;
            margin-left: auto;
            margin-right: auto;

            &:focus {
                outline: none;
                border-color: #007bff;
            }
        }

        button {
            padding: 0.5rem 2rem;
            font-size: 1rem;
            color: white;
            background: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;

            &:hover {
                background: #0056b3;
            }
        }
    }
`;

export default Signup; // Export Signup component for use in other parts of the application
