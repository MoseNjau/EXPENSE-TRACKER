import moment from 'moment'; // Importing Moment.js library for date formatting

/**
 * dateFormat function
 * @param {string | Date} date - The date to be formatted.
 * @returns {string} Formatted date string in 'DD/MM/YYYY' format.
 */
export const dateFormat = (date) => {
    return moment(date).format('DD/MM/YYYY'); // Formats the input date using Moment.js to 'DD/MM/YYYY' format
};
