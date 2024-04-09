import { Pressable, Text } from "react-native"

const FormButton = ({ children, style, onPress }) => {
    return (
        <Pressable style={style} onPress={onPress}>
            <Text>{children}</Text>
        </Pressable>
    )
}

export default FormButton