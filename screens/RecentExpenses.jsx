import { useContext, useEffect, useState } from "react"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../context/ExpensesCTX"
import { getFormattedDate, getRecentDays } from "../utils/dates"
import { fetchData } from "../utils/http"
import { Text } from "react-native"
import ErrorOverlay from "../components/UI/ErrorOverlay"
import LoadingOverlay from "../components/UI/LoadingOverlay"

const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()
    const expensesCTX = useContext(ExpensesContext)

    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true)
            try {
                const response = await fetchData()
                expensesCTX.setExpenses(response)
            } catch {
                setError("Can't reach your expensese now, try again later...")
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
        return <LoadingOverlay />
    } else return (
        <ExpensesOutput
            expenses={recentExpenses}
            periodName={"For 7 Days"}
            fallback={"There're no expense for 7 days."}
        />
    )
}

export default RecentExpenses