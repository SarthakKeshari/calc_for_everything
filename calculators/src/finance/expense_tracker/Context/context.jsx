import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Actions
    const deleteTransaction = (id) => dispatch({ type:'DELETE_TRANSACTION', payload:id })
    const addTransaction = (transaction) => dispatch({ type:'ADD_TRANSACTION', payload:transaction })

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount ,0)

    // console.log(transactions)

    return(
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}