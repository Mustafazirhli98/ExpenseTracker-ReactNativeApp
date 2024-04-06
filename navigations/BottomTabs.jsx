import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Recent Expenses' component={RecentExpenses} />
            <Tab.Screen name='All Expenses' component={AllExpenses} />
        </Tab.Navigator>
    )
}

export default BottomTabs