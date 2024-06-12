/**
 * @file Navigation.js
 * 
 * This file contains the Navigation component for the Expense Tracker application.
 * It handles user navigation, displays user information, and provides logout functionality.
 * 
 * The component uses styled-components for styling and react-router-dom for navigation.
 */

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import avatar from "../../img/avatar.png";  // Make sure the path to avatar is correct

/**
 * Navigation Component
 * 
 * @param {object} props - Component props
 * @param {number} props.active - Active menu item ID
 * @param {function} props.setActive - Function to set active menu item
 * @returns {JSX.Element} - Rendered Navigation component
 */
function Navigation({ active, setActive }) {
  // Global context for user and logout function
  const { user, logout } = useGlobalContext();
  const navigate = useNavigate();

  /**
   * Handles logout action.
   * Clears user session and navigates to home page.
   */
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Do not render if user is not logged in
  if (!user) return null;

  // Render Navigation component
  return (
    <NavStyled>
      {/* User information section */}
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>{user.username}</h2>
          <p>Moses Njau</p>
        </div>
      </div>

      {/* Menu items section */}
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActive(item.id);
              navigate(item.link);
            }}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      {/* Bottom navigation section */}
      <div className="bottom-nav">
        <li onClick={handleLogout}>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
}

// Styled-components for Navigation styling
const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  /* User information styling */
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  /* Menu items styling */
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  /* Active menu item styling */
  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  /* Bottom navigation styling */
  .bottom-nav {
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(34, 34, 96, 0.6);
      transition: color 0.4s ease-in-out;
      &:hover {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  @media (max-width: 768px) {
    /* Media query for smaller screens */
    font-size: small;
  }
`;

export default Navigation;
