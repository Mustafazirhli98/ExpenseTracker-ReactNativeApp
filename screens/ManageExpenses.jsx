import { useContext, useLayoutEffect, useState } from "react"
import { Alert, StyleSheet, View } from "react-native"
import { GlobalStyles } from "../constants/GlobalStyles"
import ExpenseForm from "../components/form/ExpenseForm"
import { ExpensesContext } from "../context/ExpensesCTX"
import DeleteButton from "../components/UI/DeleteButton"
import { deleteData, storeData, updateData } from "../utils/http"
import LoadingOverlay from "../components/UI/LoadingOverlay"
import { AlertTexts } from "../constants/AlertTexts"
import ErrorOverlay from "../components/UI/ErrorOverlay"

const ManageExpenses = ({ navigation, route }) => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState()
    const expensesCTX = useContext(ExpensesContext)
    const editedId = route.params?.id
    const isEditMode = !!editedId

    const selectedExpense = expensesCTX.expenses.find(item => item.id === editedId)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditMode ? "Update Expense" : "Add",
        })
    }, [navigation, isEditMode])

    const onCancel = () => {
        navigation.goBack()
    }
    const onDelete = async () => {
        try {
            setIsLoading(true)
            const res = await deleteData(editedId)
            console.log(res)
            navigation.goBack()
            expensesCTX.deleteExpense(editedId)
        } catch {
            setError("Can't delete this expense now, try again later.")
            setIsLoading(false)
        }
    }
    const deleteHandler = () => {
        Alert.alert(AlertTexts.deleteAlert.title, AlertTexts.deleteAlert.body, [
            { style: "cancel", text: AlertTexts.deleteAlert.button2 },
            { style: "default", text: AlertTexts.deleteAlert.button1, onPress: onDelete }
        ])

    }
    const confirmHandler = async (expenseData) => {
        try {
            setIsLoading(true)
            if (isEditMode) {
                await updateData(editedId, expenseData)
                expensesCTX.updateExpense(editedId, expenseData)
            } else {
                setIsLoading(true)
                const id = await storeData(expenseData)
                expensesCTX.addExpense({ ...expenseData, id: id })
            }
            navigation.goBack()
        } catch {
            setError("Can't response your call, please try again later.")
            setIsLoading(false)
        }
    }


    if (isLoading) {
        return (
            <LoadingOverlay />
        )
    }
    if (!isLoading && error) {
        return (
            <ErrorOverlay errorMessage={error} />
        )
    }
    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditMode ? "Edit" : "Add"}
                onCancel={onCancel}
                onSubmit={confirmHandler}
                defaultValues={selectedExpense}
            />
            {
                isEditMode && (
                    <View style={styles.deleteIconContainer}>
                        <DeleteButton
                            name={"trash"}
                            size={50}
                            color={GlobalStyles.COLORS.light200}
                            onPress={deleteHandler}
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
        backgroundColor: GlobalStyles.COLORS.primary400,
        padding: 15
    },

    deleteIconContainer: {
        borderTopWidth: 1,
        borderTopColor: GlobalStyles.COLORS.light100,
        marginTop: 30,
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})