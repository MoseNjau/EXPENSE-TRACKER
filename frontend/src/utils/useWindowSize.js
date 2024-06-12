import { useEffect, useState } from "react";

/**
 * Custom hook to track window size changes.
 * @returns {{ width: number, height: number }} Object containing current window width and height.
 */
export const useWindowSize = () => {
    // State to store the current window size
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    // Effect to update the size state when window is resized
    useEffect(() => {
        /**
         * Updates the size state with current window dimensions.
         */
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        // Add event listener to listen for window resize events
        window.addEventListener('resize', updateSize);

        // Clean-up function to remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []); // Empty dependency array ensures effect runs only once after initial render

    // Return an object containing current window width and height
    return {
        width: size[0], // Current window width
        height: size[1] // Current window height
    };
};
