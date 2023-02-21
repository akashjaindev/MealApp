import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetail from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favourites-context";

export default function MealDetailScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const favouriteMealCtx = useContext(FavoritesContext);

  const mealIsFav = favouriteMealCtx.ids.includes(mealId);

  function changeFavouriteState() {
    if (mealIsFav) {
      favouriteMealCtx.removeFavourite(mealId)
    } else {
      favouriteMealCtx.addFavourite(mealId)
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteState}
          />
        );
      },
    });
  }, [navigation, changeFavouriteState]);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
    alignSelf: "center",
  },
});
