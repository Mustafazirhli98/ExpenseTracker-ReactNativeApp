import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import { Ionicons } from "@expo/vector-icons"
import AddButton from '../components/UI/AddButton';
import { GlobalStyles } from '../constants/GlobalStyles';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ navigation }) => ({
            headerStyle: {
                backgroundColor: GlobalStyles.COLORS.primary300
            },
            headerTintColor: GlobalStyles.COLORS.light200,
            headerRight: ({ tintColor }) => (
                <AddButton
                    color={tintColor}
                    size={30}
                    onPress={() => navigation.navigate("ManageExpenses")} />
            ),
            tabBarItemStyle: {
                padding: 5
            },
            tabBarStyle: {
                backgroundColor: GlobalStyles.COLORS.primary300
            },
            tabBarInactiveTintColor: GlobalStyles.COLORS.light100,
            tabBarActiveTintColor: GlobalStyles.COLORS.light200,

        })}>
            <Tab.Screen
                name='Recent Expenses'
                component={RecentExpenses}
                options={{
                    title: "Recent Expenses",
                    tabBarIcon: ({ color }) => <Ionicons name='hourglass-outline' size={24} color={color} />,
                    tabBarLabel: "Recent"
                }}
            />
            <Tab.Screen
                name='All Expenses'
                component={AllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarIcon: ({ color }) => <Ionicons name='calendar-outline' size={24} color={color} />,
                    tabBarLabel: "All"
                }}
            />
        </Tab.Navigator >
    )
}

export default BottomTabs