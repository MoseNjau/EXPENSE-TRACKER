// src/components/History.js
import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Context/GlobalContext';

// History component displays recent transaction history
function History() {
    // Access transactionHistory function from global context
    const { transactionHistory } = useGlobalContext();

    // Destructure history array from transactionHistory
    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            {/* Title for the transaction history section */}
            <h2>Recent History</h2>
            {/* Map through history array to render each transaction item */}
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        {/* Render transaction title with color based on type */}
                        <p style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
                            {title}
                        </p>
                        {/* Render transaction amount with color and sign based on type */}
                        <p style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
                            {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </HistoryStyled>
    );
}

// Styling for History component using styled-components
const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .history-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History; // Export History component for use in other parts of the application
