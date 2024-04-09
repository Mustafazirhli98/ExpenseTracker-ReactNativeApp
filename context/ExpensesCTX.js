import { createContext, useReducer } from "react";

const DUMMY_DATA = [
    {
        amount: 5,
        date: new Date("2024-04-07"),
        description: "Newspaper",
        id: 1
    },
    {
        amount: 50,
        date: new Date("2024-04-07"),
        description: "3 theathre tickets",
        id: 2
    },
    {
        amount: 500,
        date: new Date("2024-03-07"),
        description: "new cellphone",
        id: 3
    },
    {
        amount: 50,
        date: new Date("2024-04-06"),
        description: "a pair of shoes",
        id: 4
    },
    {
        amount: 40,
        date: new Date("2024-04-09"),
        description: "Fast food",
        id: 4
    }
]


const initialValue = {
    expenses: [],
    addExpense: ({ amount, date, description }) => { },
    updateExpense: (id, { amount, date, description }) => { },
    deleteExpense: (id) => { }
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

            case "DELETE":
                return state.filter(item => item.id !== action.payload)
        }
    }
    const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_DATA)

    const addExpense = (expensesData) => {
        dispatch({ type: "ADD", payload: expensesData })
    }
    const updateExpense = (id, expensesData) => {
        dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } })
    }
    const deleteExpense = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }

    const value = {
        expenses: expenses,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}

export { ContextProvider, ExpensesContext }