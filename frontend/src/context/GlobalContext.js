import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // Add Income
  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income)
      console.log(response);
      toast.success("Income Added Successfully");
      getIncomes();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error Adding Income: ${err.response.data.message}`);
    }
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
      console.log(res.data);
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
      const response = await axios.post(`${BASE_URL}add-expense`, expense);
      console.log(response.data);
      toast.success("Expense Added Successfully");
      getExpenses();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(`Error Adding Expense: ${err.response.data.message}`);
    }
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
      console.log(res.data);
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
