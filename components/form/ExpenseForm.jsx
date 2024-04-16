import { Keyboard, StyleSheet, Text, View } from "react-native"
import FormButton from "../UI/FormButton"
import Input from "./Input"
import { useState } from "react"
import { GlobalStyles } from "../../constants/GlobalStyles"
import { getFormattedDate } from "../../utils/dates"

const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit, defaultValues }) => {

    const [inputData, setInputData] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : "",
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : "",
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : "",
            isValid: true
        },
    })

    const isFormValid = inputData.amount.isValid && inputData.date.isValid && inputData.description.isValid

    const inputChangeHandler = (inputName, enteredText) => {
        setInputData(prev => ({
            ...prev,
            [inputName]: { value: enteredText, isValid: true }
        }))
    }
    const submitHandler = () => {
        Keyboard.dismiss()
        const expenseData = {
            amount: inputData.amount.value,
            date: new Date(inputData.date.value),
            description: inputData.description.value
        }
        const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const isDateValid = expenseData.date.toString() !== 'Invalid Date'
        const isDescriptionValid = expenseData.description.trim() !== ""
        console.log(expenseData)
        if (!isAmountValid || !isDateValid || !isDescriptionValid) {
            setInputData(prev => ({
                amount: { value: prev.amount.value, isValid: isAmountValid },
                date: { value: prev.date.value, isValid: isDateValid },
                description: { value: prev.date.value, isValid: isDescriptionValid }
            }))
            return;
        }
        onSubmit(expenseData)
    }
    return (
        <View>
            <Text style={styles.title}>Expense Information</Text>
            <View style={styles.inputGroup}>
                <Input
                    invalid={!inputData.amount.isValid}
                    style={styles.rowInput}
                    label="amount"
                    textInputConfig={{
                        keyboardType: "number-pad",
                        onChangeText: (enteredText) => inputChangeHandler("amount", enteredText),
                        value: inputData.amount.value
                    }}
                />
                <Input
                    invalid={!inputData.date.isValid}
                    style={styles.rowInput}
                    label="date"
                    textInputConfig={{
                        maxLength: 10,
                        placeholder: "YYYY-MM-DD",
                        onChangeText: (enteredText) => inputChangeHandler("date", enteredText),
                        value: inputData.date.value
                    }}
                />
            </View>
            <Input
                invalid={!inputData.description.isValid}
                label="description"
                textInputConfig={{
                    onChangeText: (enteredText) => inputChangeHandler("description", enteredText),
                    multiline: true,
                    value: inputData.description.value
                }}
            />
            {!isFormValid && <Text style={styles.errorMessage}>Informations are not in a valid type.</Text>}
            <View style={styles.buttonContainer}>
                <FormButton
                    style={styles.button}
                    onPress={onCancel}
                    mode="flat"
                >
                    Cancel
                </FormButton>
                <FormButton
                    style={styles.button}
                    onPress={submitHandler}
                >
                    {submitButtonLabel}
                </FormButton>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: GlobalStyles.COLORS.light200,
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 50
    },
    inputGroup: {
        flexDirection: "row",
        marginTop: 30,
    },
    rowInput: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    button: {
        marginHorizontal: 15,
        minWidth: 100
    },
    errorMessage: {
        textAlign: "center",
        color: GlobalStyles.COLORS.errorTextColor
    }
})