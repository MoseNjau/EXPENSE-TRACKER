/**
 * @file Orb.js
 * 
 * This file contains the Orb component that creates a moving orb effect on the screen.
 * It uses styled-components for styling and a keyframe animation for movement.
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

/**
 * Orb Component
 * 
 * @returns {JSX.Element} - Rendered Orb component
 */
function Orb() {
    const { width, height } = useWindowSize();

    // Keyframe animation for moving the orb across the screen
    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width}px, ${height / 2}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

    // Styled-component for the Orb
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite; // Applying the keyframe animation
    `;

    return (
        <OrbStyled></OrbStyled>
    );
}

export default Orb;
