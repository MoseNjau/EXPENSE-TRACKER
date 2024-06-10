import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarStyled>
      <h2 className="expense-tracker">Expense Tracker</h2>
      <div className="nav">
        <div className="home">Home</div>
        <div className="services">How it works</div>
        <div className="contact-us">Contact Us</div>
        <div className="about-us">About Us</div>
      </div>
      <div className="auth">
        <Link to="/signup" className="sign-up">Sign Up</Link>
        <Link to="/login" className="login">Login</Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  background-color: #fbe4ff;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: content-box;
  .expense-tracker {
    place-self: center;
    &:hover {
      cursor: pointer;
    }
  }
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
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 20px;
    }

    .sign-up {
      background-color: #bf8cf2;
    }
    .login {
      background-color: #8c30e8;
    }
  }

  @media (max-width: 1335px) {
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: small;
  }

  @media (max-width: 640px) {
    .nav {
      display: none;
      background-color: red;
    }
  }

  @media (max-width: 480px) {
  }
`;

export default Navbar