/**
 * File: App.js
 * Description: Main application component. Manages routes and renders the appropriate
 *              components based on the user's authentication state.
 */

import React, { useMemo, useState } from "react"; // Importing React and hooks
import styled from "styled-components"; // Importing styled-components for styling
import bg from "./img/bg.png"; // Importing background image
import { MainLayout } from "./styles/Layouts"; // Importing main layout styles
import Orb from "./Components/Orb/Orb"; // Importing Orb component
import { ToastContainer } from "react-toastify"; // Importing ToastContainer for notifications
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // Importing React Router components
import Signup from './pages/Auth/Signup'; // Importing Signup page
import Login from './pages/Auth/Login'; // Importing Login page
import Logout from './pages/Auth/Logout'; // Importing Logout page
import Dashboard from './pages/Dashboard/Dashboard'; // Importing Dashboard page
import Income from './pages/Income/Income'; // Importing Income page
import Expenses from './pages/Expenses/Expenses'; // Importing Expenses page
import Transactions from './pages/Transactions/Transactions'; // Importing Transactions page
import LandingPage from './pages/LandingPage/LandingPage'; // Importing Landing page
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'; // Importing PrivateRoute component for protected routes
import PublicRoute from './Components/PublicRoute/PublicRoute'; // Importing PublicRoute component for public routes
import Navigation from "./Components/Navigation/Navigation"; // Importing Navigation component
import { useGlobalContext } from './Context/GlobalContext'; // Importing global context

function App() {
  // Get user information from global context
  const { user } = useGlobalContext();

  // State to manage the active navigation item
  const [active, setActive] = useState('dashboard');

  // Hook for navigation
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  // Memoize the Orb component to avoid unnecessary re-renders
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo} {/* Render memoized Orb component */}
      <MainLayout>
        {user && (
          // Render Navigation component if user is logged in
          <Navigation active={active} setActive={setActive} handleLogout={handleLogout} />
        )}
        <main>
          <Routes>
            {/* Public route for the landing page */}
            <Route 
              path="/" 
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              } 
            />
            {/* Public route for the signup page */}
            <Route 
              path="/signup" 
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              } 
            />
            {/* Public route for the login page */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            {/* Route for the logout page */}
            <Route path="/logout" element={<Logout />} />
            {/* Private route for the dashboard page */}
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            {/* Private route for the income page */}
            <Route 
              path="/income" 
              element={
                <PrivateRoute>
                  <Income />
                </PrivateRoute>
              } 
            />
            {/* Private route for the expenses page */}
            <Route 
              path="/expenses" 
              element={
                <PrivateRoute>
                  <Expenses />
                </PrivateRoute>
              } 
            />
            {/* Private route for the transactions page */}
            <Route 
              path="/transactions" 
              element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
              } 
            />
            {/* Redirect to home for unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </MainLayout>
      <ToastContainer /> {/* Toast notifications container */}
    </AppStyled>
  );
}

// Styled component for the App
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 15px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

// Export App component as default
export default App;
