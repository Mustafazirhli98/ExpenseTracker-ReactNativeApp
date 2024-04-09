import { Ionicons } from "@expo/vector-icons"
import { Pressable, StyleSheet } from "react-native"


const DeleteButton = ({ name, size, color, onPress }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    )
}

export default DeleteButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.25
    }
})
