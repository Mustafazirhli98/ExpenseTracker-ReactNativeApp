import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../constants/GlobalStyles"

const ErrorOverlay = ({ errorMessage }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{errorMessage}</Text>
        </View>
    )
}

export default ErrorOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.primary200,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    text: {
        fontSize: 16,
        color: GlobalStyles.COLORS.primary400,
    }
})