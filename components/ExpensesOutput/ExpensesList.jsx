import { FlatList, StyleSheet, View } from "react-native"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = ({ expenses }) => {
    const renderItemHelper = (itemData) => {
        const item = itemData.item
        return (
            <ExpenseItem {...item} />
        )
    }
    return (
        <FlatList data={expenses} renderItem={renderItemHelper} keyExtractor={(item) => item.id} />
    )
}
export default ExpensesList

const styles = StyleSheet.create({

})