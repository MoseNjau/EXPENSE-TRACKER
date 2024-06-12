import { createGlobalStyle } from "styled-components";

// Create a global style component using styled-components
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        /* Define CSS variables for color palette */
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body {
        /* Global body styles */
        font-family: 'Nunito', sans-serif; /* Set default font family */
        font-size: clamp(1rem, 1.5vw, 1.2rem); /* Responsive font size */
        overflow: hidden; /* Hide overflow to prevent scrolling */
        color: rgba(34, 34, 96, .6); /* Default text color */
    }

    h1, h2, h3, h4, h5, h6 {
        /* Heading styles */
        color: var(--primary-color); /* Set heading text color */
    }

    .error {
        /* Error message styles */
        color: red; /* Set error text color to red */
        animation: shake 0.5s ease-in-out; /* Apply shake animation */
        @keyframes shake {
            0% {
                transform: translateX(0); /* Initial position */
            }
            25% {
                transform: translateX(10px); /* Move right */
            }
            50% {
                transform: translateX(-10px); /* Move left */
            }
            75% {
                transform: translateX(10px); /* Move right */
            }
            100% {
                transform: translateX(0); /* Return to initial position */
            }
        }
    }

    /* Responsive max-width settings */
    @media (max-width: 1335px) {
        max-width: 1200px; /* Adjust max-width for large screens */
    }

    @media (max-width: 1200px) {
        max-width: 1024px; /* Adjust max-width for medium screens */
    }

    @media (max-width: 1024px) {
        max-width: 768px; /* Adjust max-width for small screens */
    }

    @media (max-width: 768px) {
        max-width: 640px; /* Adjust max-width for smaller screens */
    }

    @media (max-width: 640px) {
        max-width: 480px; /* Adjust max-width for very small screens */
    }

    @media (max-width: 480px) {
        max-width: 100%; /* Full width for smallest screens */
    }
`;
