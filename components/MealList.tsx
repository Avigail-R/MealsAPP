import Meal from "../models/meal";
import MealItem from "./MealList/MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealList({items}: { items: Meal[] }) {
    function renderMealItem(itemData: { item: Meal }) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return <MealItem
            {...mealItemProps}/>
    }

    return <View style={styles.container}>
        <FlatList
            data={items}
            keyExtractor={(item) => item.id} renderItem={renderMealItem}
        />
    </View>
}
export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }

});