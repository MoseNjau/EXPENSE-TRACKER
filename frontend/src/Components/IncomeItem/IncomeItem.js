/**
 * File: IncomeItem.js
 * Description: Defines a React component for displaying individual income or expense items.
 */

import React from 'react'; // Importing React library
import styled from 'styled-components'; // Importing styled-components for styling
import { dateFormat } from '../../utils/dateFormat'; // Importing dateFormat function from utils/dateFormat
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons'; // Importing icons from utils/Icons
import Button from '../Button/Button'; // Importing Button component

/**
 * IncomeItem Component
 * 
 * @param {object} props - Component props
 * @param {string} props.id - Unique identifier for the item
 * @param {string} props.title - Title of the income or expense
 * @param {number} props.amount - Amount of the income or expense
 * @param {Date} props.date - Date of the income or expense
 * @param {string} props.category - Category of the income or expense
 * @param {string} props.description - Description of the income or expense
 * @param {function} props.deleteItem - Function to delete the income or expense item
 * @param {string} props.indicatorColor - Color indicator for the item
 * @param {string} props.type - Type of item ('income' or 'expense')
 * @returns {JSX.Element} JSX representation of the IncomeItem component
 */
function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    /**
     * Function to determine the icon based on the category for income.
     * @returns {JSX.Element} Icon component based on category
     */
    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';
        }
    }

    /**
     * Function to determine the icon based on the category for expense.
     * @returns {JSX.Element} Icon component based on category
     */
    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }

    console.log('type', type); // Logging the type prop

    // Rendering the IncomeItem component
    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()} {/* Rendering category icon based on item type */}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p> {/* Displaying amount with dollar icon */}
                        <p>{calender} {dateFormat(date)}</p> {/* Displaying formatted date with calendar icon */}
                        <p>
                            {comment}
                            {description} {/* Displaying description with comment icon */}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'} // Background color for the button
                            color={'#fff'} // Text color for the button
                            iColor={'#fff'} // Icon color for the button
                            hColor={'var(--color-green)'} // Hover background color for the button
                            onClick={() => deleteItem(id)} // Handler for button click
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

// Styled component for the IncomeItem
const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;

    .icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;

        i {
            font-size: 2.6rem; // Icon size
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;

        h5 {
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator}; // Indicator color based on prop
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .text {
                display: flex;
                align-items: center;
                gap: 1.5rem;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color); // Primary color for text
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem; // Exporting IncomeItem component as default
