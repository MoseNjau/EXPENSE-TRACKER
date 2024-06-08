// src/Components/LandingPage/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Register</Link></li>
        </ul>
      </nav>
      <section>
        <h1>Welcome to Our Service</h1>
        <p>This is the landing page. Navigate using the menu above.</p>
      </section>
    </LandingPageStyled>
  );
};

const LandingPageStyled = styled.div`
  nav {
    background: #333;
    padding: 1rem;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      li {
        a {
          color: white;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  section {
    text-align: center;
    margin-top: 2rem;
    h1 {
      font-size: 2.5rem;
      color: #333;
    }
    p {
      font-size: 1.2rem;
      color: #666;
    }
  }
`;

export default LandingPage;
