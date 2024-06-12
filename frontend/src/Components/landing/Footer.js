/**
 * @file Footer.js
 * 
 * This file contains the Footer component for the Expense Tracker application.
 * It includes sections for app information, navigation links, social links,
 * and copyright information.
 */

import React from "react";
import styled from "styled-components";

/**
 * Footer Component
 * 
 * @returns {JSX.Element} - Rendered Footer component
 */
function Footer() {
  return (
    <FooterStyled>
      {/* Section 1: App Information and Navigation Links */}
      <div className="section1">
        {/* Expense Tracker App */}
        <div className="expense-tracker-app">
          <div className="content">
            <p>Expense Tracker</p>
            <p>App</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav">
          <div className="links">
            {/* Who We Are */}
            <div className="who-we-are">
              <div className="title">Who we are</div>
              <div className="items">About Us</div>
              <div className="items">Careers</div>
            </div>

            {/* Use Expense Tracker */}
            <div className="use-expense-tracker">
              <div className="title">use-expense-tracker</div>
              <div className="items">Android</div>
              <div className="items">PC</div>
              <div>Expense Tracker Web</div>
            </div>

            {/* What We Do */}
            <div className="what-we-do">
              <div className="title">what-we-do</div>
              <div className="items">Android</div>
            </div>

            {/* Need Help */}
            <div className="need-help">
              <div className="title">need-help</div>
              <div className="items">Contact Us</div>
              <div className="items">Help Center</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="socials">
            <div className="center-div">
              {/* LinkedIn - Johnmark */}
              <a
                href="https://www.linkedin.com/in/johnmark-muhando-69a05b270/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="johnmark"
                  src="https://media.licdn.com/dms/image/D4D03AQFmQjbD9FfsZA/profile-displayphoto-shrink_200_200/0/1712308715110?e=1723680000&v=beta&t=6oOuDrxV_kigc7dE86pJ1L8UIayzk1zOn82_wrK0aMc"
                  alt="johnmark"
                />
              </a>

              {/* LinkedIn - Moses */}
              <a
                href="https://www.linkedin.com/in/moses-njau-29354524b/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="moses"
                  src="https://media.licdn.com/dms/image/D4D03AQGtIAPVMH3PXQ/profile-displayphoto-shrink_200_200/0/1693117789474?e=1723680000&v=beta&t=co4yAgaGPVRRBAB-nHKOhtFjONpDgcFasNMLRK7NSKo"
                  alt="moses"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Copyright and Social Links */}
      <div className="section2">
        {/* Copy Rights */}
        <div className="copy-rights">
          <div className="at-expense-tracker">2024@ExpenseTracker</div>

          {/* Terms & Privacy */}
          <div className="terms">
            <p>Terms & Privacy</p>
            <p>Policies</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <img
            src="https://i.pinimg.com/564x/b5/9d/15/b59d15f1d09ebd9882cad4a448688aac.jpg"
            alt="facebook"
            className="facebook"
          />
          <img
            src="https://i.pinimg.com/564x/e9/58/5d/e9585dd0d277236b30953bca60761072.jpg"
            alt="twitter"
            className="twitter"
          />
          <img
            src="https://i.pinimg.com/564x/29/fe/f9/29fef91506c1750b02a2541b3f73f8d2.jpg"
            alt="linkedin"
            className="linkedin"
          />
          <img
            src="https://i.pinimg.com/736x/93/87/90/938790b17acb5b3b8236d65ce8c4fc45.jpg"
            alt="instagram"
            className="instagram"
          />
        </div>
      </div>
    </FooterStyled>
  );
}

// Styled-components for Footer component styling
const FooterStyled = styled.div`
  background-color: #4d4949; // Background color for footer
  color: white; // Text color for footer

  /* Section 1 styles */
  .section1 {
    display: flex;
    flex-direction: column;

    /* Expense Tracker App styles */
    .expense-tracker-app {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      .content {
        display: flex;
        flex-direction: column;
      }
    }

    /* Navigation styles */
    .nav {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      /* Links styles */
      .links {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: x-large;
        color: black;

        /* Sections in Links */
        .who-we-are,
        .use-expense-tracker,
        .what-we-do,
        .need-help {
          display: flex;
          flex-direction: column;
          gap: 10px;

          /* Title styles */
          .title {
            color: white;
            font-size: small;
          }

          /* Items styles */
          .items {
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
      }

      /* Socials styles */
      .socials {
        display: flex;
        justify-content: center;
        align-items: center;

        /* Center div styles */
        .center-div {
          display: flex;
          justify-content: space-around;
          width: 50%;

          /* Johnmark and Moses styles */
          .johnmark,
          .moses {
            margin: 5px;
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }

  /* Section 2 styles */
  .section2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    border-top: 1px solid gray;

    /* Copy rights styles */
    .copy-rights {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;

      /* At Expense Tracker styles */
      .at-expense-tracker {
        padding: 10px;
      }

      /* Terms styles */
      .terms {
        font-size: x-large;
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
    }

    /* Social links styles */
    .social-links {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50%;

      /* Social links images styles */
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
    }
  }

  /* Media queries */
  @media (max-width: 768px) {
    font-size: small;
  }
`;

export default Footer; // Exporting Footer component as default
