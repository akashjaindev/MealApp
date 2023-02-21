import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "../MealDetails";

export default function MealItem(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => navigation.navigate("MealDetail", { mealId: props.id })}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerCotainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{props.title}</Text>
        <MealDetail duration={props.duration} complexity={props.complexity} affordability={props.affordability}/>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerCotainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
