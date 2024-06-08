// src/index.js
import React from 'react';
import { createRoot } from 'react-dom'; // Corrected import statement
import App from './App';
import { GlobalProvider } from './Context/GlobalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root')); // Changed to createRoot
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);
