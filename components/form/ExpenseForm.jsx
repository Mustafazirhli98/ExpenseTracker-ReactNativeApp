import { StyleSheet, View } from "react-native"
import FormButton from "../UI/FormButton"
import Input from "./Input"
import { useState } from "react"

const ExpenseForm = ({ submitButtonLabel }) => {

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

    return (
        <View>
            <View style={styles.inputGroup}>
                <Input
                    label="amount"
                    textInputConfig={{
                        keyboardType: "number-pad",
                        onChangeText: (enteredText) => inputChangeHandler("amount", enteredText)
                    }}
                />
                <Input
                    label="date"
                    textInputConfig={{
                        maxLength: 10,
                        placeHolder: "YYYY-MM-DD",
                        onChangeText: (enteredText) => inputChangeHandler("date", enteredText)
                    }}
                />
            </View>
            <Input
                label="description"
                textInputConfig={{
                    onChangeText: (enteredText) => inputChangeHandler("description", enteredText)
                }}
            />
            <View style={styles.buttonContainer}>
                <FormButton style={styles.button}>Cancel</FormButton>
                <FormButton style={styles.button}>{submitButtonLabel}</FormButton>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    inputGroup: {
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginHorizontal: 20,

    }
})