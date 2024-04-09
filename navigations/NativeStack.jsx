import { GlobalStyles } from "../constants/GlobalStyles"
import ManageExpenses from "../screens/ManageExpenses"
import BottomTabs from "./BottomTabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const NativeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Expenses Overview"
                component={BottomTabs}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ManageExpenses"
                component={ManageExpenses}
                options={{
                    headerStyle: {
                        backgroundColor: GlobalStyles.COLORS.primary300
                    },
                    headerTintColor: GlobalStyles.COLORS.light200
                }}
            />
        </Stack.Navigator>
    )
}

export default NativeStack