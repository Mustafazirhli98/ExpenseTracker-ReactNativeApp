import ManageExpenses from "../screens/ManageExpenses"
import BottomTabs from "./BottomTabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const NativeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Expenses Overview" component={BottomTabs} />
            <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
    )
}

export default NativeStack