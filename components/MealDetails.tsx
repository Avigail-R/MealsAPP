import {Text, View, StyleSheet} from "react-native";
type MealDetailsProps = {
    duration: number,
    complexity: string,
    affordability: string,
    style?: object,
    textStyle?: object
}

function mealDetails(props:MealDetailsProps ) {
    return(
    <View style={[styles.details, props.style]}>
        <Text style={[styles.detailItem, props.textStyle ]}>{props.duration}m</Text>
        <Text style={[styles.detailItem, props.textStyle ]}>{props.complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, props.textStyle ]}>{props.affordability.toUpperCase()}</Text>
    </View>)
}
export default mealDetails;
const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
});