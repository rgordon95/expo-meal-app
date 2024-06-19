import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const CategoryGridTile = ({ color, onPress, title }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  gridItem: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    margin: 16,
    height: 150,
    overflow: Platform.OS == "ios" ? "visible" : "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    width: 150,
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  pressed: {
    opacity: 0.35,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
