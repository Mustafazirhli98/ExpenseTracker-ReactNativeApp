import { axios } from "axios"

const BASE_URL = "https://expensetracker-reactnati-dd53b-default-rtdb.firebaseio.com/"


export const storeData = async (expensesData) => {
    const response = await axios.get(BASE_URL + "expenses.json", expensesData)
    console.log(response, "111111111111")
}

export const fetchData = async () => {

}

export const updateData = async () => {

}

export const deleteData = async () => {

}