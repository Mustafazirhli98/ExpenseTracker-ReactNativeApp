import { StyleSheet, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

const ExpensesOutput = ({ expenses, periodName }) => {
    return (
        <View>
            <ExpensesSummary expenses={expenses} periodName={periodName} />
            <ExpensesList expenses={expenses} periodName={periodName} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({

})