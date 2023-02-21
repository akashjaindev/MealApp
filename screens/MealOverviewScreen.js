import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(
        (categories) => categories.id === catId
      ).title;
      navigation.setOptions({
        title: categoryTitle,
      });
  },[catId,navigation])
  return <MealList items={displayedMeals}/>
}
