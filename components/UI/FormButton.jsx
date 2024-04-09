import { Pressable, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../constants/GlobalStyles"

const FormButton = ({ children, style, onPress, mode }) => {

    const buttonSpesificStyle = [styles.button, style]
    if (mode === "flat") {
        buttonSpesificStyle.push(styles.flatButton)
    }

    return (
        <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress} >
            <View style={buttonSpesificStyle}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable >
    )
}

export default FormButton

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: GlobalStyles.COLORS.primary300
    },
    buttonText: {
        textAlign: "center",
        fontSize: 15,
        color: GlobalStyles.COLORS.light200
    },
    flatButton: {
        backgroundColor: "transparent"
    },
    pressed: {
        opacity: 0.25
    }

})