import { useContext, useLayoutEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/GlobalStyles"
import ExpenseForm from "../components/form/ExpenseForm"
import { ExpensesContext } from "../context/ExpensesCTX"
import DeleteButton from "../components/UI/DeleteButton"

const ManageExpenses = ({ navigation, route }) => {
    const expensesCTX = useContext(ExpensesContext)
    const editedId = route.params?.id
    const isEditMode = !!editedId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditMode ? "Update Expense" : "Add",
        })
    }, [])

    const onCancel = () => {
        navigation.goBack()
    }

    const onDelete = () => {
        expensesCTX.deleteExpense(editedId)
    }

    const confirmHandler = (expenseData) => {
        //update ve add işlemleri gerçekleşecek
    }


    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditMode ? "Edit" : "Add"}
                onCancel={onCancel}
                onSubmit={confirmHandler}
            />
            {
                isEditMode && (
                    <View style={styles.deleteIconContainer}>
                        <DeleteButton
                            name={"trash"}
                            size={50}
                            color={GlobalStyles.COLORS.primary300}
                            onPress={onDelete}
                        />
                    </View>
                )
            }
        </View>
    )
}

export default ManageExpenses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.primary200,
        padding: 15
    },
    deleteIconContainer: {
        borderTopWidth: 1,
        marginTop: 30,
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})