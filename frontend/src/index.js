/**
 * File: src/index.js
 * Description: Entry point of the React application. Renders the root component
 *              into the DOM using ReactDOM's createRoot method.
 */

import React from 'react'; // Importing React library
import { createRoot } from 'react-dom'; // Importing createRoot to render the application
import App from './App'; // Importing the main App component
import { GlobalProvider } from './Context/GlobalContext'; // Importing GlobalProvider for context management
import { GlobalStyle } from './styles/GlobalStyle'; // Importing global styles
import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for routing
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify CSS for notifications

// Creating the root element and rendering the application into the DOM
const root = createRoot(document.getElementById('root')); // Getting the root element from the DOM
root.render(
  <React.StrictMode>
    <GlobalStyle /> {/* Applying global styles */}
    <GlobalProvider> {/* Providing global context */}
      <Router> {/* Enabling routing in the application */}
        <App /> {/* Rendering the main App component */}
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);
