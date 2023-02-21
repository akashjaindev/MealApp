import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(item,navigation){
    function pressHandler(){
        navigation.navigate("MealsOverview",{categoryId:item.id})
    }
    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler}/>
}

export default function CategoriesScreen({navigation}) {
    return <FlatList data = {CATEGORIES} keyExtractor={(item)=> item.id} renderItem={(itemData)=>renderCategoryItem(itemData.item,navigation)}
        numColumns={2}
    />
}