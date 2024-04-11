import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../constants/GlobalStyles"

const Input = ({ label, textInputConfig, style, invalid }) => {

    const inputSpesificStyle = [styles.inputStyles]
    if (textInputConfig.multiline) {
        inputSpesificStyle.push(styles.multiline)
    } if (invalid) inputSpesificStyle.push(styles.errorInput)
    
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.errorLabel]}>{label}</Text>
            <TextInput {...textInputConfig} style={inputSpesificStyle} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        color: GlobalStyles.COLORS.light200
    },
    inputStyles: {
        backgroundColor: GlobalStyles.COLORS.light100,
        marginVertical: 5,
        borderRadius: 8,
        paddingHorizontal: 6,
        paddingVertical: 4,
        fontSize: 18
    },
    multiline: {
        textAlignVertical: "top",
        minHeight: 100
    },
    errorInput: {
        backgroundColor: GlobalStyles.COLORS.errorBgColor,
        borderColor: GlobalStyles.COLORS.errorTextColor
    },
    errorLabel: {
        color: GlobalStyles.COLORS.errorTextColor
    }
})