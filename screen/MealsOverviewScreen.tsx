import { MEALS, CATEGORIES } from '../data/dummy-data';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList';

type RootStackParamList = {
    MealsOverview: { categoryId: string };
};

type MealsOverviewScreenProps = {
    route: RouteProp<RootStackParamList, 'MealsOverview'>;
    navigation: StackNavigationProp<RootStackParamList>;
};

function MealsOverviewScreen({ route, navigation }: MealsOverviewScreenProps) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));
    const categoryTitle = CATEGORIES.find(cat => cat.id === catId)?.title;

    useLayoutEffect(() => {
        if (categoryTitle) {
            navigation.setOptions({ title: categoryTitle });
        }
    }, [navigation, categoryTitle]); // Only update when categoryTitle or navigation changes

    return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
