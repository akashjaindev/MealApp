import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favourites-context";

export default function FavouriteScreen() {
  const favouriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favouriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet</Text>
      </View>
    );
  } else {
    return <MealList items={favoriteMeals} />;
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
