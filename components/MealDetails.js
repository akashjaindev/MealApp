import { StyleSheet, Text, View } from "react-native";

export default function MealDetail(props) {
  return (
    <View style={[styles.details,props.style]}>
      <Text style={[styles.detailItem,props.textStyle]}>{props.duration}m</Text>
      <Text style={[styles.detailItem,props.textStyle]}>{props.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,props.textStyle]}>{props.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        padding: 8,
        justifyContent: "center",
      },
      detailItem: {
        fontSize: 12,
        marginHorizontal: 4,
      },
})
