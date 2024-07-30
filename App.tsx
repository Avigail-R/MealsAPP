import {Button, StyleSheet, Text} from 'react-native';
import CategoriesScreen from "./screen/CategoriesScreen";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from "./screen/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons';
//import {FavoritesContextProvider} from "./store/context/favorites-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";
export type RootStackParamList = {
    MealSCategory: undefined;
    MealsOverview: { categoryId: string };
    MealDetail: { mealId: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401',},
            headerTintColor: '#fff',
            sceneContainerStyle: { backgroundColor: '#3f2f25' },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerInactiveTintColor: '#fff',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1' 
        }}>
            <Drawer.Screen 
                name="Categories"
                component={CategoriesScreen} 
                options={{title: "All Categories",
                    drawerIcon: ({size, color}) => (
                        <Ionicons name="list" size={size} color={color} />
                    )}}
                
            />
            <Drawer.Screen 
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({size, color}) => (
                        <Ionicons name="star" size={size} color={color} />
                    )}}
            />
       </Drawer.Navigator>
    );
}


export default function App() {
    
    return (
        <>
            <StatusBar style='light' />
           {/* <FavoritesContextProvider>*/}
          {/*  <Provider store={store}>*/}
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#351401',
                        },
                        headerTintColor: '#fff',
                        cardStyle: { backgroundColor: '#3f2f25' },
                    }}
                >
                    <Stack.Screen
                        name="MealSCategory"
                        component={DrawerNavigation}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name="MealDetail" 
                        component={MealDetailScreen} options={{
                            title: 'About the Meal',
                        
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            {/*</Provider>*/}
           {/* </FavoritesContextProvider>*/}
        </>
    );
}

const styles = StyleSheet.create({});
