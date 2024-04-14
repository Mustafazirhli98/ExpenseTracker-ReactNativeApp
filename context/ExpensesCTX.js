import { createContext, useReducer } from "react";

const initialValue = {
    expenses: [],
    addExpense: ({ amount, date, description, id }) => { },
    updateExpense: (id, { amount, date, description }) => { },
    deleteExpense: (id) => { },
    setExpenses: (expenses) => { }
}

const ExpensesContext = createContext(initialValue)

const ContextProvider = ({ children }) => {

    const expensesReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [action.payload, ...state]
            case "UPDATE":
                const updatableIndex = expenses.findIndex(item => item.id === id)
                const updatedExpenses = [...state]
                const updatableExpense = updatedExpenses[updatableIndex]
                updatableExpense = action.payload.data
                updatedExpenses = [...state, updatableExpense]
                return updatableExpense
            case "SET":
                const inverted = action.payload.reverse()
                return inverted

            case "DELETE":
                return state.filter(item => item.id !== action.payload)
        }
    }
    const [expenses, dispatch] = useReducer(expensesReducer, [])

    const addExpense = (expensesData) => {
        dispatch({ type: "ADD", payload: expensesData })
    }
    const updateExpense = (id, expensesData) => {
        dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } })
    }
    const setExpenses = (expenses) => {
        dispatch({ type: "SET", payload: expenses })
    }
    const deleteExpense = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }

    const value = {
        expenses: expenses,
        addExpense: addExpense,
        updateExpense: updateExpense,
        setExpenses: setExpenses,
        deleteExpense: deleteExpense
    }
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}

export { ContextProvider, ExpensesContext }