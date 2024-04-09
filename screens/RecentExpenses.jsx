import { useContext } from "react"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../context/ExpensesCTX"
import { getRecentDays } from "../utils/dates"

const RecentExpenses = () => {
    const expensesCTX = useContext(ExpensesContext)
    const recentExpenses = expensesCTX.expenses.filter(item => {
        const today = new Date()
        const expenseDate = getRecentDays(today, 7)
        return item.date > expenseDate
    })

    return (
        <ExpensesOutput expenses={recentExpenses} periodName={"For 7 Days"} />
    )
}

export default RecentExpenses