// src/utils/menuItems.js
import { dashboard, expenses, transactions, trend } from '../utils/Icons';

export const menuItems = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 'transactions',
        title: 'View Transactions',
        icon: transactions,
        link: '/transactions'
    },
    {
        id: 'income',
        title: 'Incomes',
        icon: trend,
        link: '/income'
    },
    {
        id: 'expenses',
        title: 'Expenses',
        icon: expenses,
        link: '/expenses'
    }
];
