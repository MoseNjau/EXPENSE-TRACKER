import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/GlobalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "./../../Components/Form/Form"; // Importing Form component for adding new income entries
import IncomeItem from "../../Components/IncomeItem/IncomeItem"; // Importing IncomeItem component for displaying income items

/**
 * Income Component
 * 
 * @returns {JSX.Element} JSX representation of the Income component
 */
function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext(); // Destructuring incomes state, getIncomes function, deleteIncome function, and totalIncome function from global context

  useEffect(() => {
    getIncomes(); // Fetch incomes on component mount
  }, [getIncomes]);

  // Render the Income component UI
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span> {/* Display total income amount */}
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form /> {/* Render Form component for adding new income entries */}
          </div>
          <div className="incomes">
            {/* Map through incomes array to render each IncomeItem */}
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } = income; // Destructure income object
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
                  indicatorColor="var(--color-green)" // Indicator color for income items
                  deleteItem={deleteIncome} // Function to delete income item
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

// Styled component for Income layout
const IncomeStyled = styled.div`
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

export default Income; // Export Income component as default
