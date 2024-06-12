import styled from "styled-components";

// Styled component for the main layout container
export const MainLayout = styled.div`
  padding: 8px; /* Adds 8 pixels of padding around the MainLayout */
  height: 100%; /* Ensures the component takes up full height of its container */
  display: flex; /* Uses flexbox for layout */
  gap: 16px; /* Sets a gap of 16 pixels between child elements */
`;

// Styled component for the inner layout container
export const InnerLayout = styled.div`
  padding: 32px 24px; /* Adds 32 pixels of padding top and bottom, 24 pixels left and right */
  width: 100%; /* Ensures the component takes up full width of its container */
`;
