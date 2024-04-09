import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"


const DeleteButton = ({ name, size, color, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    )
}

export default DeleteButton
