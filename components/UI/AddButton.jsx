import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const AddButton = ({ onPress, size, color }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Ionicons name='add' size={size} color={color} />
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10
    }
})