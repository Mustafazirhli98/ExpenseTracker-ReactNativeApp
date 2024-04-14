import { useContext } from "react"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../context/ExpensesCTX"

const AllExpenses = () => {
    const expensesCTX = useContext(ExpensesContext)

    return (
        <ExpensesOutput
            expenses={expensesCTX.expenses}
            periodName={"Total"}
            fallback={"You have no any expenses!"}
        />
    )
}

export default AllExpenses