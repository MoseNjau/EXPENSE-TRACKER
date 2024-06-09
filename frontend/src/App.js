import React, { useMemo, useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Logout from './pages/Auth/Logout';
import Dashboard from './pages/Dashboard/Dashboard';
import Income from './pages/Income/Income';
import Expenses from './pages/Expenses/Expenses';
import Transactions from './pages/Transactions/Transactions';
import LandingPage from './pages/LandingPage/LandingPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Navigation from "./Components/Navigation/Navigation";
import { useGlobalContext } from './Context/GlobalContext';

function App() {
  const { user } = useGlobalContext();
  const [active, setActive] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        {user && <Navigation active={active} setActive={setActive} handleLogout={handleLogout} />}
        <main>
          <Routes>
            <Route index element={<LandingPage />} />
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
            <Route 
              path="/transactions" 
              element={
                <PrivateRoute>
                  <Transactions />
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
    border-radius: 15px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
