import axios from "axios"

const BASE_URL = "https://expensetracker-reactnati-dd53b-default-rtdb.firebaseio.com"

export const storeData = async (expensesData) => {
    try {
        const response = await axios.post(BASE_URL + "/expenses.json", expensesData)
        return response.data.name
    } catch (err) {
        console.log("post error")
    }
}

export const fetchData = async () => {
    try {
        const response = await axios.get(BASE_URL + "/expenses.json")
        const expenses = []
        const keys = Object.keys(response.data)
        keys.forEach(item => {
            const expense = response.data[item]
            const expenseData = {
                id: item,
                amount: expense.amount,
                date: new Date(expense.date),
                description: expense.description
            }
            expenses.push(expenseData)
        })
        return expenses
    } catch {
        console.log("fetch error")
    }

}

export const updateData = async () => {
    try {

    } catch {
        console.log("update error")
    }
}

export const deleteData = async (id) => {
    try {
        axios.delete(BASE_URL + `/expenses/${id}.json`)
    } catch {
        console.log("deleteError")
    }
}