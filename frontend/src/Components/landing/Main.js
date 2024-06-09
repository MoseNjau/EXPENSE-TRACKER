import React from "react";
import styled from "styled-components";
import chart from "../../img/chart.png";
import min from "../../img/min_max.png";

function Main() {
  return (
    <MainStyled>
      <div className="section1">
        <img
          className="image"
          src="https://i.pinimg.com/564x/16/44/04/1644043229ea78ca7923f387b1e27006.jpg"
          alt="Income and Expenses"
        />
      </div>
      <div className="section2">
        <p>
          Categorize each expense and add and a description to identify where
          your money is spent and also where you get it from, With dating all
          your activities identify how frequently you spend on some things and
          how frequent you receive income from specific sources.
        </p>
      </div>
      <div className="section3">
        <div className="content">
          <p>
            Do not spend a lot of time worried about how you cannot manage your
            money, Just visualize how and where your cash flows to and make more
            informed decisions
          </p>
        </div>
        <div className="pic">
          <img className="chart" src={chart} alt="chart" />
        </div>
      </div>
      <div className="section4">
        <div className="pic">
          <img className="min" src={min} alt="Min Max" />
        </div>
        <div className="content">
          <div className="inner-content">
            <h1>Have the Statistics of your Cash</h1>
            <p>
              Get an idea of the highest and lowest amount of money that you
              spend and receive overtime
            </p>
          </div>
        </div>
      </div>
      <div className="section5">
        <p>
          Visualize how frequent and how your expenses affect your overall
          financial state, Get a pattern of your spending habits and work on
          them to become good at managing yourself, Budget your money
          intuitively and have some cash to save for future use and emergencies.
        </p>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  .section1,
  .section2,
  .section3,
  .section4,
  .section5 {
    min-height: 400px;
  }

  .section1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    background-image: linear-gradient(#b273f0, white);
    border-radius: 20px;
    padding: 20px;
    .image {
      border-radius: 30px;
      object-fit: contain;
    }
  }
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

  .section4 {
    font-size: large;
    display: flex;
    background-color: #b273f0;
    padding: 10px;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      .inner-content {
        width: 60%;
        h1 {
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
`;

export default Main;
