import {CATEGORIES} from '../data/dummy-data'
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {NavigationProp} from "@react-navigation/native";
import Category from "../models/category";

type CategoriesScreenProps = {
  navigation: NavigationProp<any>; // נעדכן את הטייפ של navigation
};

function CategoriesScreen({navigation}:CategoriesScreenProps){
  function renderCategoriesItem(itemData: {item: Category}){
    function pressHandler(){
        navigation.navigate('MealsOverview',
            {categoryId: itemData.item.id})
    }
    return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={pressHandler}
    />
  }
  return <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
  />
}
export default CategoriesScreen;