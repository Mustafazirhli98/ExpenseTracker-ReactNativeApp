import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../constants/GlobalStyles"

const ExpensesSummary = ({ expenses, periodName }) => {
    const expensesSum = expenses.reduce((acc, expense) => {
        return acc + expense.amount
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{periodName}</Text>
            <Text style={styles.amount}>{parseFloat(expensesSum).toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 14,
        backgroundColor: GlobalStyles.COLORS.primary100,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        borderRadius: 8
    },
    title: {
        fontWeight: "bold",
        color: GlobalStyles.COLORS.primary400
    },
    amount: {
        fontWeight: "bold",
        fontSize: 16,
        color: GlobalStyles.COLORS.primary400
    }
})