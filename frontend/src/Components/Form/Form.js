/**
 * File: Form.js
 * Description: Defines a React component for a form to add income entries.
 */

import React, { useState } from 'react'; // Importing React library
import styled from 'styled-components'; // Importing styled-components for styling
import DatePicker from 'react-datepicker'; // Importing DatePicker component from react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importing default styles for react-datepicker
import Button from '../Button/Button'; // Importing Button component
import { plus } from '../../utils/Icons'; // Importing plus icon from utils/Icons
import { useGlobalContext } from '../../Context/GlobalContext'; // Importing useGlobalContext for accessing global state

/**
 * Form Component
 * 
 * @returns {JSX.Element} JSX representation of the Form component
 */
function Form() {
    const { addIncome, error, setError } = useGlobalContext(); // Accessing addIncome and error state from global context

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState; // Destructuring state variables for input fields

    // Handler for input changes
    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError(''); // Resetting error state on input change
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState); // Calling addIncome function from global context to add income entry
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        }); // Resetting inputState after submission
    };

    // Rendering the form
    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>} {/* Displaying error message if error state is truthy */}
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date });
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'} // Background color for the button
                    color={'#fff'} // Text color for the button
                />
            </div>
        </FormStyled>
    );
}

// Styled component for the Form
const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff; // White border for input fields
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06); // Shadow effect for depth
        color: rgba(34, 34, 96, 0.9); // Text color for input fields

        &::placeholder {
            color: rgba(34, 34, 96, 0.4); // Placeholder text color
        }
    }

    .input-control {
        input {
            width: 100%; // Full width for input fields
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            color: rgba(34, 34, 96, 0.4); // Default text color for select input
            &:focus, &:active {
                color: rgba(34, 34, 96, 1); // Active/focused text color for select input
            }
        }
    }

    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06); // Shadow effect for depth

            &:hover {
                background: var(--color-green) !important; // Background color on hover for button
            }
        }
    }
`;

export default Form; // Exporting Form component as default
