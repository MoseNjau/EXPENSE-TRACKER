import React from 'react'; // Importing React library
import Navbar from './../../Components/landing/Navbar'; // Importing Navbar component from landing folder
import Main from "./../../Components/landing/Main"; // Importing Main component from landing folder
import Footer from "./../../Components/landing/Footer"; // Importing Footer component from landing folder

/**
 * LandingPage Component
 * 
 * @returns {JSX.Element} JSX representation of the LandingPage component
 */
function LandingPage() {
  return (
    <div>
      <Navbar /> {/* Render Navbar component for navigation */}
      <Main /> {/* Render Main component for main content */}
      <Footer /> {/* Render Footer component for page footer */}
    </div>
  );
}

export default LandingPage; // Export LandingPage component as default
