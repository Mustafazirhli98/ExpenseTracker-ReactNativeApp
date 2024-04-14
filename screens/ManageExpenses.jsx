import { useContext, useLayoutEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/GlobalStyles"
import ExpenseForm from "../components/form/ExpenseForm"
import { ExpensesContext } from "../context/ExpensesCTX"
import DeleteButton from "../components/UI/DeleteButton"
import { deleteData, storeData, updateData } from "../utils/http"

const ManageExpenses = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false)
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
    const onDelete = async () => {
        try {
            //loading ekle
            expensesCTX.deleteExpense(editedId)
            await deleteData(editedId)
            navigation.goBack()
        } catch {
            console.log("delete error")
        }
    }

    const confirmHandler = async (expenseData) => {
        if (isEditMode) {
            await updateData(editedId, expenseData)
            expensesCTX.updateExpense(editedId, expenseData)
        } else {
            const id = await storeData(expenseData)
            expensesCTX.addExpense({ ...expenseData, id: id })
        }
        navigation.goBack()
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
                            color={GlobalStyles.COLORS.light200}
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