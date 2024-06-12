// src/utils/menuItems.js

// Importing icons from utils/Icons
import { dashboard, expenses, transactions, trend } from '../utils/Icons';

// Array of menu items
export const menuItems = [
    {
        id: 'dashboard', // Unique identifier for the menu item
        title: 'Dashboard', // Display title of the menu item
        icon: dashboard, // Icon associated with the dashboard
        link: '/dashboard' // URL link for navigating to the dashboard
    },
    {
        id: 'transactions', // Unique identifier for the menu item
        title: 'View Transactions', // Display title of the menu item
        icon: transactions, // Icon associated with viewing transactions
        link: '/transactions' // URL link for navigating to the transactions page
    },
    {
        id: 'income', // Unique identifier for the menu item
        title: 'Incomes', // Display title of the menu item
        icon: trend, // Icon associated with incomes
        link: '/income' // URL link for navigating to the income page
    },
    {
        id: 'expenses', // Unique identifier for the menu item
        title: 'Expenses', // Display title of the menu item
        icon: expenses, // Icon associated with expenses
        link: '/expenses' // URL link for navigating to the expenses page
    }
];
