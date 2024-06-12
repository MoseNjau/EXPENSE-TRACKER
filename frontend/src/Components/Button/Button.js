/**
 * File: Button.js
 * Description: Defines a reusable button component using styled-components.
 */

import React from 'react'; // Importing React library
import styled from 'styled-components'; // Importing styled-components for styling

/**
 * Button Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The text content of the button
 * @param {JSX.Element} props.icon - Optional icon element to display before the text
 * @param {Function} props.onClick - Click event handler function
 * @param {string} props.bg - Background color of the button
 * @param {string} props.bPad - Padding of the button
 * @param {string} props.color - Text color of the button
 * @param {string} props.bRad - Border radius of the button
 * 
 * @returns {JSX.Element} JSX representation of the Button component
 */
function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    );
}

// Styled component for the Button
const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;

export default Button; // Exporting Button component as default
