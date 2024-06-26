import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';
import styled from 'styled-components';

// Define the Login component
const Login = () => {
    // Access necessary functions and state from global context
    const { login } = useGlobalContext();

    // State variables for email, password, and navigation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            await login(email, password); // Attempt to login with provided credentials
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } catch (err) {
            alert('Error logging in user'); // Alert user in case of login error
        }
    };

    // JSX structure and styling using styled-components
    return (
        <LoginStyled>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
        </LoginStyled>
    );
};

// Styling for Login component using styled-components
const LoginStyled = styled.div`
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

export default Login; // Export Login component for use in other parts of the application
