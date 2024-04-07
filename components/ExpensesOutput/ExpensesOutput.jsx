import { StyleSheet, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/GlobalStyles"

const ExpensesOutput = ({ expenses, periodName }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName} />
            <ExpensesList expenses={expenses} periodName={periodName} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.primary200,
        padding: 15

    }
})