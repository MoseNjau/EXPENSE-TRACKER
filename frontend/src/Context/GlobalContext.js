/**
 * @file GlobalProvider.js
 * 
 * GlobalProvider Component provides global state management for user data, incomes, expenses,
 * authentication, and transaction history using React Context API. It also includes functions
 * to interact with backend API endpoints for user authentication, CRUD operations on incomes
 * and expenses, and utility functions to calculate totals and transaction history.
 */

import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/api/v1/";

// Create a context object for global state management
const GlobalContext = React.createContext();

/**
 * GlobalProvider Component
 * 
 * @param {Object} children - The components or elements to wrap with global context.
 * @returns {JSX.Element} - Provides global state and functions via Context API to children components.
 */
export const GlobalProvider = ({ children }) => {
  // State variables for incomes, expenses, error messages, and user authentication
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // Function to register a new user
  const register = async (username, email, password) => {
    try {
      await axios.post(`${BASE_URL}register`, { username, email, password });
      toast.success("User registered successfully");
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error registering user: ${err.response.data.message}`);
    }
  };

  // Function to log in a user
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, { email, password });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success("User logged in successfully");
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error logging in user: ${err.response.data.message}`);
    }
  };

  // Function to log out a user
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success("User logged out successfully");
  };

  // Function to add a new income
  const addIncome = async (income) => {
    try {
      await axios.post(`${BASE_URL}add-income`, income, {
        headers: {
          'x-auth-token': user?.token
        }
      });
      toast.success("Income Added Successfully");
      getIncomes();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error Adding Income: ${err.response.data.message}`);
    }
  };

  // Function to fetch incomes from the backend
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`, {
      headers: {
        'x-auth-token': user?.token
      }
    });
    setIncomes(response.data);
  };

  // Function to delete an income
  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}delete-income/${id}`, {
        headers: {
          'x-auth-token': user?.token
        }
      });
      toast.success("Income Deleted Successfully");
      getIncomes();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error Deleting Income: ${err.response.data.message}`);
    }
  };

  // Function to calculate total income
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  // Function to add a new expense
  const addExpense = async (expense) => {
    try {
      await axios.post(`${BASE_URL}add-expense`, expense, {
        headers: {
          'x-auth-token': user?.token
        }
      });
      toast.success("Expense Added Successfully");
      getExpenses();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error Adding Expense: ${err.response.data.message}`);
    }
  };

  // Function to fetch expenses from the backend
  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`, {
      headers: {
        'x-auth-token': user?.token
      }
    });
    setExpenses(response.data);
  };

  // Function to delete an expense
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${BASE_URL}delete-expense/${id}`, {
        headers: {
          'x-auth-token': user?.token
        }
      });
      toast.success("Expense Deleted Successfully");
      getExpenses();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error Deleting Expense: ${err.response.data.message}`);
    }
  };

  // Function to calculate total expenses
  const totalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    return totalExpenses;
  };

  // Function to calculate total balance
  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  // Function to retrieve transaction history (latest transactions)
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

  // Provide the context values to the wrapped components
  return (
    <GlobalContext.Provider
      value={{
        register,
        login,
        logout,
        user,
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * useGlobalContext Hook
 * 
 * Custom hook to access the global context values provided by GlobalProvider.
 * 
 * @returns {Object} - Context values and functions for managing global state.
 */
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
