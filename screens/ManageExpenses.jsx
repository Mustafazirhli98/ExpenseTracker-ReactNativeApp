import { useLayoutEffect } from "react"
import { StyleSheet, View } from "react-native"
import { GlobalStyles } from "../constants/GlobalStyles"
import ExpenseForm from "../components/form/ExpenseForm"

const ManageExpenses = ({ navigation, route }) => {
    const editedId = route.params?.id
    const isEditMode = !!editedId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditMode ? "Update Expense" : "Add",
        })
    }, [])

    return (
        <View style={styles.container}>
            <ExpenseForm submitButtonLabel={isEditMode ? "Edit" : "Add"} />
        </View>
    )
}

export default ManageExpenses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.primary200,
        padding: 15
    }
})