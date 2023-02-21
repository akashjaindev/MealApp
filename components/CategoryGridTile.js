import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
      onPress={props.onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160,
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
