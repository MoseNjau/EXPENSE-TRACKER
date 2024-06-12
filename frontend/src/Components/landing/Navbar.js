/**
 * @file Navbar.js
 * 
 * This file contains the Navbar component for the Expense Tracker application.
 * It includes navigation links and authentication options.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Navbar Component
 * 
 * @returns {JSX.Element} - Rendered Navbar component
 */
function Navbar() {
  return (
    <NavbarStyled>
      {/* Expense Tracker heading */}
      <h2 className="expense-tracker">Expense Tracker</h2>

      {/* Navigation links */}
      <div className="nav">
        <div className="home">Home</div>
        <div className="services">How it works</div>
        <div className="contact-us">Contact Us</div>
        <div className="about-us">About Us</div>
      </div>

      {/* Authentication links */}
      <div className="auth">
        <Link to="/signup" className="sign-up">Sign Up</Link>
        <Link to="/login" className="login">Login</Link>
      </div>
    </NavbarStyled>
  );
}

// Styled-components for Navbar styling
const NavbarStyled = styled.div`
  background-color: #fbe4ff;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: content-box;

  /* Expense Tracker heading styling */
  .expense-tracker {
    place-self: center;
    &:hover {
      cursor: pointer;
    }
  }

  /* Navigation links styling */
  .nav {
    display: flex;
    justify-content: space-evenly;
    place-self: center;

    .home,
    .services,
    .contact-us,
    .about-us {
      &:hover {
        cursor: pointer;
        background-color: #8c30e8;
        color: white;
      }
      &:active {
        background-color: #bf8cf2;
      }
      padding: 8px;
      border-radius: 10px;
    }
  }

  /* Authentication links styling */
  .auth {
    display: flex;
    justify-content: space-evenly;
    place-self: center;

    .sign-up,
    .login {
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: white;
        color: black;
      }
      text-decoration: none;
      margin-left: 10px;
      margin-right: 10px;
      padding: 8px 20px;
      border-radius: 20px;
    }

    .sign-up {
      background-color: #bf8cf2;
    }
    .login {
      background-color: #8c30e8;
    }
  }

  /* Media queries */
  @media (max-width: 768px) {
    font-size: small;
  }

  @media (max-width: 640px) {
    /* Hide navigation links on smaller screens */
    .nav {
      display: none;
    }
  }
`;

export default Navbar;
