import { useContext, useEffect, useState } from "react"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../context/ExpensesCTX"
import { getFormattedDate, getRecentDays } from "../utils/dates"
import { fetchData } from "../utils/http"
import { Text } from "react-native"

const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(true)
    const expensesCTX = useContext(ExpensesContext)

    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true)
            try {
                const response = await fetchData()
                expensesCTX.setExpenses(response)
            } catch {
                console.log("getExpensesData error!")
            }
            setIsFetching(false)
        }
        getExpenses()
    }, [])

    const recentExpenses = expensesCTX.expenses.filter(item => {
        const today = new Date()
        const expenseDate = getRecentDays(today, 7)
        return item.date > expenseDate
    })

    if (isFetching) {
        return <Text>Fetching...</Text>
    }

    return (
        <ExpensesOutput expenses={recentExpenses} periodName={"For 7 Days"} />
    )
}

export default RecentExpenses