import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../constants/GlobalStyles"

const Input = ({ label, textInputConfig }) => {
    console.log(textInputConfig)
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig} style={styles.inputStyles} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputStyles: {
        backgroundColor: GlobalStyles.COLORS.light200
    }
})