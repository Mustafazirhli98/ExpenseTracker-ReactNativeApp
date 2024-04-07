import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import { Ionicons } from "@expo/vector-icons"
import AddButton from '../components/UI/AddButton';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ navigation }) => ({
            headerRight: () => (
                <AddButton
                    color={"black"}
                    size={30}
                    onPress={() => navigation.navigate("ManageExpenses")} />
            ),
            tabBarItemStyle: {
                padding: 5
            }
        })}>
            <Tab.Screen
                name='Recent Expenses'
                component={RecentExpenses}
                options={{
                    title: "Recent",
                    tabBarIcon: () => <Ionicons name='hourglass-outline' size={24} color={"black"} />
                }}
            />
            <Tab.Screen
                name='All Expenses'
                component={AllExpenses}
                options={{
                    title: "All",
                    tabBarIcon: () => <Ionicons name='calendar-outline' size={24} color={"black"} />
                }}
            />
        </Tab.Navigator >
    )
}

export default BottomTabs