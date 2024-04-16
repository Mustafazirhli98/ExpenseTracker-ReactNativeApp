import { Pressable, StyleSheet, Text, View } from "react-native"
import { getFormattedDate } from "../../utils/dates"
import { GlobalStyles } from "../../constants/GlobalStyles"
import { useNavigation } from "@react-navigation/native"

const ExpenseItem = ({ amount, date, description, id }) => {
    const navigation = useNavigation()
    const expenseHandler = () => {
        navigation.navigate("ManageExpenses", {
            id: id
        })
    }
    return (
        <Pressable style={styles.container} onPress={expenseHandler}>
            <View>
                <Text style={styles.informText}>{description}</Text>
                <Text style={styles.informText}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amountText}>{parseFloat(amount).toFixed(2)}</Text>
            </View>
        </Pressable>
    )
}

export default ExpenseItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        backgroundColor: GlobalStyles.COLORS.primary300,
        padding: 10,
        borderRadius: 8,
        elevation: 6,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        borderRadius: 8
    },
    informText: {
        color: GlobalStyles.COLORS.light200,
        marginBottom: 3,
    },
    amountContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.COLORS.primary100,
        minWidth: 50,
        borderRadius: 8
    },
    amountText: {
        fontWeight: "bold",
        fontSize: 15,
        color: GlobalStyles.COLORS.primary400
    }
})