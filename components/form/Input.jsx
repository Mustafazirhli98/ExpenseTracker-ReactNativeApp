import { Text, TextInput, View } from "react-native"

const Input = ({ label, textInputConfig }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput />
        </View>
    )
}

export default Input