import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // Auth related functions
  const register = async (username, email, password) => {
    try {
      await axios.post(`${BASE_URL}register`, { username, email, password });
      toast.success("User registered successfully");
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error registering user: ${err.response.data.message}`);
    }
  };

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

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success("User logged out successfully");
  };

  // Add Income
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

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`, {
      headers: {
        'x-auth-token': user?.token
      }
    });
    setIncomes(response.data);
    console.log(response.data);
  };

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

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  // Add Expense
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

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`, {
      headers: {
        'x-auth-token': user?.token
      }
    });
    setExpenses(response.data);
    console.log(response.data);
  };

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

  const totalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    return totalExpenses;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

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

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
