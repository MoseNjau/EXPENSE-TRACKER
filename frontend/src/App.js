// src/App.js
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import LandingPage from './Components/LandingPage/LandingPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Navigation from "./Components/Navigation/Navigation";
import { useGlobalContext } from './Context/GlobalContext'; // Import the context hook

function App() {
  const { user } = useGlobalContext(); // Get user from the context
  const [active, setActive] = useState('dashboard'); // Initialize active state
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data on logout
    navigate('/'); // Redirect to landing page
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        {user && <Navigation active={active} setActive={setActive} handleLogout={handleLogout} />} {/* Render Navigation only if user is logged in */}
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/income" 
              element={
                <PrivateRoute>
                  <Income />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/expenses" 
              element={
                <PrivateRoute>
                  <Expenses />
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </MainLayout>
      <ToastContainer />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
