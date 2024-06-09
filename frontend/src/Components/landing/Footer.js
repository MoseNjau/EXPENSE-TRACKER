import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <div className="section1">
        <div className="expense-tracker-app">
          <div className="content">
            <p>Expense Tracker</p>
            <p>App</p>
          </div>
        </div>
        <div className="nav">
          <div className="links">
            <div className="who-we-are">
              <div className="title">Who we are</div>
              <div className="items">About Us</div>
              <div className="items">Careers</div>
            </div>
            <div className="use-expense-tracker">
              <div className="title">use-expense-tracker</div>
              <div className="items">Android</div>
              <div className="items">PC</div>
              <div>Expense Tracker Web</div>
            </div>
            <div className="what-we-do">
              <div className="title">what-we-do</div>
              <div className="items">Android</div>
            </div>
            <div className="need-help">
              <div className="title">need-help</div>
              <div className="items">Contact Us</div>
              <div className="items">Help Center</div>
            </div>
          </div>
          <div className="socials">
            <div className="center-div">
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
      <div className="section2">
        <div className="copy-rights">
          <div className="at-expense-tracker">2024@ExpenseTracker</div>
          <div className="terms">
            <p>Terms & Privacy</p>
            <p>Policies</p>
          </div>
        </div>
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

const FooterStyled = styled.div`
  background-color: #4d4949;
  color: white;

  .section1 {
    display: flex;
    .nav {
      flex: 1;
      .links {
        display: flex;
        justify-content: space-around;
        font-size: x-large;
        padding: 10px;
        color: black;
        .who-we-are {
          .title {
            color: white;
            font-size: small;
          }
          .items {
            margin: 5px;
          }
        }
        .use-expense-tracker {
          .title {
            color: white;
            font-size: small;
          }
          .items {
            margin: 5px;
          }
        }
        .what-we-do {
          .title {
            color: white;
            font-size: small;
          }
          .items {
            margin: 5px;
          }
        }
        .need-help {
          .title {
            color: white;
            font-size: small;
          }
          .items {
            margin: 5px;
          }
        }
      }
      .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        .center-div {
          display: flex;
          justify-content: space-around;
          width: 50%;
          .johnmark {
            margin: 5px;
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
          .moses {
            margin: 5px;
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
        }
      }
    }
    .expense-tracker-app {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      font-size: x-large;
      .content {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .section2 {
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    border-top: 1px solid gray;
    .copy-rights {
      width: 50%;
      display: flex;
      justify-content: space-around;
      .at-expense-tracker {
        padding-left: 10px;
        padding-right: 10px;
      }
      .terms {
        font-size: x-large;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    .social-links {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
    }
  }
`;
export default Footer;
