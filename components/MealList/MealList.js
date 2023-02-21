import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default function MealList({items}){
    function renderMealItem(item) {
        const mealItem = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
        return <MealItem {...mealItem} />;
      }
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(itemData) => itemData.id}
            renderItem={(itemData) => renderMealItem(itemData.item)}
          />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });