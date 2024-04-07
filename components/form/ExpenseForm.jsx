import { StyleSheet, View } from "react-native"
import FormButton from "../UI/FormButton"
import Input from "./input"

const ExpenseForm = ({ submitButtonLabel }) => {
    return (
        <View>
            <View style={styles.inputGroup}>
                <Input
                    label="amount"
                    textInputConfig={{
                        keyboardType: "number-pad"
                    }}
                />
                <Input
                    label="date"
                    textInputConfig={{
                        placeHolder: "YYYY-MM-DD"
                    }}
                />
            </View>
            <Input label="description" />
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