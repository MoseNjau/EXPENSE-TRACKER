import React from 'react'; // Importing React library
import styled from 'styled-components'; // Importing styled-components for styling

// Sample transactions data
const transactionsData = [
  {
    id: 1,
    date: '2024-06-01',
    title: 'Groceries',
    amount: -50,
    description: 'Weekly grocery shopping',
  },
  {
    id: 2,
    date: '2024-06-05',
    title: 'Salary',
    amount: 2000,
    description: 'Monthly salary',
  },
  // Add more transactions as needed
];

/**
 * Transactions Component
 * 
 * @returns {JSX.Element} JSX representation of the Transactions component
 */
const Transactions = () => {
  // Sort transactions by date (earliest date at the top)
  const sortedTransactions = [...transactionsData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <TransactionsContainer>
      <h2>Transactions</h2>
      <TransactionsTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through sorted transactions and render each transaction as a table row */}
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td> {/* Display transaction date */}
              <td>{transaction.title}</td> {/* Display transaction title */}
              <td>{transaction.amount}</td> {/* Display transaction amount */}
              <td>{transaction.description}</td> {/* Display transaction description */}
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};

// Styled component for Transactions container
const TransactionsContainer = styled.div`
  padding: 2rem; /* Padding around the Transactions component */
`;

// Styled component for Transactions table
const TransactionsTable = styled.table`
  width: 100%; /* Full width for the table */
  border-collapse: collapse; /* Collapse borders between table cells */

  th, td {
    padding: 0.5rem; /* Padding inside table cells */
    border-bottom: 1px solid #ccc; /* Bottom border for table rows */
    text-align: left; /* Align text to the left */
  }

  th {
    background-color: #f5f5f5; /* Background color for table header cells */
  }

  td {
    &:first-child {
      width: 25%; /* Set width for the first column */
    }

    &:nth-child(3) {
      color: ${(props) => (props.amount < 0 ? 'red' : 'green')}; /* Conditional styling based on transaction amount */
    }
  }
`;

export default Transactions; // Export Transactions component as default
