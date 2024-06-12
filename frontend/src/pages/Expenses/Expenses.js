/**
 * File: Expenses.js
 * Description: Defines a React component to manage and display expenses.
 */

import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
// import Form from '../form/Form'; // Commented out unused import
import IncomeItem from "../../Components/IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";
import { useGlobalContext } from "../../Context/GlobalContext";

/**
 * Expenses Component
 * 
 * @returns {JSX.Element} JSX representation of the Expenses component
 */
function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses(); // Fetch expenses on component mount
  }, [getExpenses]);

  // Render the Expenses component UI
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense: <span>${totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm /> {/* Render ExpenseForm component for adding expenses */}
          </div>
          <div className="incomes">
            {/* Map through expenses array to render each ExpenseItem */}
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;
              console.log(income);
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

// Styled component for Expenses layout
const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;

    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    gap: 2rem;

    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses; // Export Expenses component as default
