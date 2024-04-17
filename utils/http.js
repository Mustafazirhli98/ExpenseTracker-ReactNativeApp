import axios from "axios"

const BASE_URL = "https://expensetracker-reactnati-dd53b-default-rtdb.firebaseio.com"

export const storeData = async (expensesData) => {
    const response = await axios.post(BASE_URL + "/expenses.json", expensesData)
    return response.data.name
}

export const fetchData = async () => {
    const response = axios.get(BASE_URL + "/expenses.json")
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
}

export const updateData = async (id, expenseData) => {
    await axios.put(BASE_URL + `/expenses/${id}.json`, expenseData)
    console.log("güncelleme başarılı")
}

export const deleteData = async (id) => {
    const response = axios.delete(BASE_URL + `/expenses/${id}.json`)
    return response
}