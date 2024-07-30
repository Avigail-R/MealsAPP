import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../App";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import IconButton from "../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/redux/store"; // Adjust the import path as needed
import { addFavorite, removeFavorite } from "../store/redux/favorites";
/*import {FavoritesContext} from "../store/context/favorites-context";*/

type MealDetailScreenProps = {
    route: RouteProp<RootStackParamList, 'MealDetail'>;
    navigation: StackNavigationProp<RootStackParamList>;
};

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
    /*const favoriteMealsCtx = useContext(FavoritesContext);*/
    const dispatch = useDispatch();
    const favoriteMealsIds = useSelector((state: RootState) => state.favoritesMeals.ids);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const mealIsFavorite = favoriteMealsIds.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
            /*favoriteMealsCtx.removeFavorite(mealId);*/
            dispatch(removeFavorite(mealId));
        } else {
            /*favoriteMealsCtx.addFavorite(mealId);*/
            dispatch(addFavorite({ id: mealId }));
        }
    };

    if (!selectedMeal) {
        return <Text>Meal not found!</Text>;
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon={mealIsFavorite ? "star" : "star-outline"}
                    color="white"
                    onPress={changeFavoriteStatusHandler}
                />
            ),
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailsText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <View style={styles.subTitleContainer}>
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailsText: {
        color: 'white',
    },
    subTitleContainer: {
        marginVertical: 8,
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    }
});
