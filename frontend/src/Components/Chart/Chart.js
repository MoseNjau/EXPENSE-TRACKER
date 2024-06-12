/**
 * File: Chart.js
 * Description: Defines a React component that displays a chart using Chart.js and react-chartjs-2.
 */

import React from 'react'; // Importing React library
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'; // Importing necessary components from Chart.js
import { Line } from 'react-chartjs-2'; // Importing Line component from react-chartjs-2
import styled from 'styled-components'; // Importing styled-components for styling
import { useGlobalContext } from '../../Context/GlobalContext'; // Importing useGlobalContext for accessing global state
import { dateFormat } from '../../utils/dateFormat'; // Importing dateFormat utility function

// Registering Chart.js components
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

/**
 * Chart Component
 * 
 * @returns {JSX.Element} JSX representation of the Chart component
 */
function Chart() {
    const { incomes, expenses } = useGlobalContext(); // Accessing incomes and expenses from global context

    // Constructing chart data
    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date); // Formatting date using dateFormat utility function
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount), // Extracting amount from incomes
                backgroundColor: 'green', // Setting background color for income data
                tension: 0.2, // Setting tension for smooth line curve
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount), // Extracting amount from expenses
                backgroundColor: 'red', // Setting background color for expense data
                tension: 0.2, // Setting tension for smooth line curve
            }
        ]
    };

    // Render the chart using Line component from react-chartjs-2
    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
}

// Styled component for the Chart
const ChartStyled = styled.div`
    background: #FCF6F9; // Background color for the chart container
    border: 2px solid #FFFFFF; // White border around the chart container
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06); // Shadow effect for depth
    padding: 1rem; // Padding inside the chart container
    border-radius: 20px; // Rounded corners for the chart container
    height: 100%; // Full height of the chart container
`;

export default Chart; // Exporting Chart component as default
