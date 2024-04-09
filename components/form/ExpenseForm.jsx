import { StyleSheet, Text, View } from "react-native"
import FormButton from "../UI/FormButton"
import Input from "./Input"
import { useState } from "react"
import { GlobalStyles } from "../../constants/GlobalStyles"

const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit }) => {

    const [inputData, setInputData] = useState({
        amount: { value: "", isValid: true },
        date: { value: "", isValid: true },
        description: { value: "", isValid: true }
    })

    const inputChangeHandler = (inputName, enteredText) => {
        setInputData(prev => ({
            ...prev,
            [inputName]: { value: enteredText, isValid: true }
        }
        ))
    }

    const submitHandler = () => {
        //gerekli  validation işlemleri ile birlikte data tekrar gönderilecek ve onSubmit(expenseData) çalıştırılacak.
    }

    return (
        <View>
            <Text style={styles.title}>Expense Information</Text>
            <View style={styles.inputGroup}>
                <Input
                    style={styles.rowInput}
                    label="amount"
                    textInputConfig={{
                        keyboardType: "number-pad",
                        onChangeText: (enteredText) => inputChangeHandler("amount", enteredText)
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="date"
                    textInputConfig={{
                        maxLength: 10,
                        placeholder: "YYYY-MM-DD",
                        onChangeText: (enteredText) => inputChangeHandler("date", enteredText)
                    }}
                />
            </View>
            <Input
                label="description"
                textInputConfig={{
                    onChangeText: (enteredText) => inputChangeHandler("description", enteredText),
                    multiline: true
                }}
            />
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
    }
})