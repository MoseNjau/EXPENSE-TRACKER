import React from 'react';
import styled from 'styled-components';

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
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};

const TransactionsContainer = styled.div`
  padding: 2rem;
`;

const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  td {
    &:first-child {
      width: 25%;
    }

    &:nth-child(3) {
      color: ${(props) => (props.amount < 0 ? 'red' : 'green')};
    }
  }
`;

export default Transactions;
