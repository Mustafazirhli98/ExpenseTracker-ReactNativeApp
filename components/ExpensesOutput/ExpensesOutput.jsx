import { StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/GlobalStyles"

const ExpensesOutput = ({ expenses, periodName, fallback }) => {
    let content = <ExpensesList expenses={expenses} periodName={periodName} />
    if (expenses.length < 1) {
        content =
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>{fallback}</Text>
            </View>
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName} />
            {content}
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.primary200,
        padding: 15

    },
    fallbackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallbackText: {
        fontSize: 18,
        color: GlobalStyles.COLORS.primary400
    }
})