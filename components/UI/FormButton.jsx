import { Pressable, Text } from "react-native"

const FormButton = ({ children, style }) => {
    return (
        <Pressable style={style}>
            <Text>{children}</Text>
        </Pressable>
    )
}

export default FormButton