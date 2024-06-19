import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const FaveMealsCtx = useContext(FavoritesContext);

  const FaveMeals = MEALS.filter((meal) => FaveMealsCtx.ids.includes(meal.id));

  if (FaveMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealsList meals={FaveMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
