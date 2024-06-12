/**
 * @file Main.js
 * 
 * This file contains the Main component for the Expense Tracker application.
 * It displays various sections with information and images related to financial management.
 */

import React from "react";
import styled from "styled-components";
import chart from "../../img/chart.png"; // Importing chart image
import min from "../../img/min_max.png"; // Importing min_max image

/**
 * Main Component
 * 
 * @returns {JSX.Element} - Rendered Main component
 */
function Main() {
  return (
    <MainStyled>
      {/* Section 1: Image Display */}
      <div className="section1">
        <img
          className="image"
          src="https://i.pinimg.com/564x/16/44/04/1644043229ea78ca7923f387b1e27006.jpg"
          alt="Income and Expenses"
        />
      </div>

      {/* Section 2: Text Description */}
      <div className="section2">
        <p>
          Categorize each expense and add a description to identify where your
          money is spent and also where you get it from. With dating all your
          activities, identify how frequently you spend on some things and how
          frequent you receive income from specific sources.
        </p>
      </div>

      {/* Section 3: Content with Image */}
      <div className="section3">
        <div className="content">
          <p>
            Do not spend a lot of time worried about how you cannot manage your
            money. Just visualize how and where your cash flows and make more
            informed decisions.
          </p>
        </div>
        <div className="pic">
          <img className="chart" src={chart} alt="chart" />
        </div>
      </div>

      {/* Section 4: Image with Content */}
      <div className="section4">
        <div className="pic">
          <img className="min" src={min} alt="Min Max" />
        </div>
        <div className="content">
          <div className="inner-content">
            <div>Have the Statistics of your Cash</div>
            <p>
              Get an idea of the highest and lowest amount of money that you
              spend and receive overtime.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Conclusion Text */}
      <div className="section5">
        <p>
          Visualize how frequent and how your expenses affect your overall
          financial state. Get a pattern of your spending habits and work on
          them to become good at managing yourself. Budget your money
          intuitively and have some cash to save for future use and emergencies.
        </p>
      </div>
    </MainStyled>
  );
}

// Styled-components for Main component styling
const MainStyled = styled.div`
  /* Styling for Section 1: Image Display */
  .section1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-image: linear-gradient(#8c30e8, white);
    border-radius: 20px;
    padding: 10px;

    .image {
      border-radius: 20px;
      object-fit: contain;
    }
  }

  /* Styling for Section 2: Text Description */
  .section2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    margin: 20px;

    p {
      text-align: center;
      width: 70%;
    }
  }

  /* Styling for Section 3: Content with Image */
  .section3 {
    font-size: x-large;
    display: flex;

    .content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 60%;
      }
    }

    .pic {
      width: 50%;

      .chart {
        border-radius: 20px;
      }
    }
  }

  /* Styling for Section 4: Image with Content */
  .section4 {
    font-size: large;
    display: flex;
    background-color: #b273f0;
    padding: 10px;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;

      .inner-content {
        width: 60%;

        div {
          font-weight: bolder;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        p {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }

    .pic {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .min {
        border-radius: 20px;
      }
    }
  }

  /* Styling for Section 5: Conclusion Text */
  .section5 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    text-align: center;

    p {
      width: 60%;
    }
  }

  /* Media queries for responsive design */
  @media (max-width: 768px) {
    font-size: small;

    /* Adjustments for Section 3: Content with Image */
    .section3 {
      .pic {
        .chart {
          height: 80%;
          width: 80%;
        }
      }
    }

    /* Adjustments for Section 4: Image with Content */
    .section4 {
      .pic {
        .min {
          height: 80%;
          width: 80%;
        }
      }
    }
  }

  @media (max-width: 640px) {
    /* Further adjustments for Section 1: Image Display */
    .section1 {
      .image {
        height: 80%;
        width: 80%;
      }
    }

    /* Further adjustments for Section 3: Content with Image */
    .section3 {
      .pic {
        .chart {
          height: 80%;
          width: 80%;
        }
      }
    }

    /* Further adjustments for Section 4: Image with Content */
    .section4 {
      .pic {
        .min {
          height: 80%;
          width: 80%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    /* Additional adjustments for Section 1: Image Display */
    .section1 {
      .image {
        height: 75%;
        width: 75%;
      }
    }
  }

  /* Responsive font-size adjustments for all sections */
  .section1,
  .section2,
  .section3,
  .section4,
  .section5 {
    @media (max-width: 1024px) {
      font-size: xx-large;
    }

    @media (max-width: 768px) {
      font-size: x-large;
    }

    @media (max-width: 640px) {
      font-size: larger;
    }

    @media (max-width: 480px) {
      font-size: medium;
    }
  }
`;

export default Main;
