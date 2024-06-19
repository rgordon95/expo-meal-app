import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";
import MealItem from "../components/MealsList/MealItem";
import { useContext, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.MealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const FavoriteMealsCtx = useContext(FavoritesContext);

  const isFavorite = FavoriteMealsCtx.ids.includes(mealId);

  const isFavoriteHandler = () => {
    if (isFavorite) {
        FavoriteMealsCtx.removeFavorite(mealId);
    } else {
        FavoriteMealsCtx.addFavorite(mealId);
    }
};

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <View>
            <Pressable onPress={isFavoriteHandler}>
              <Ionicons name={isFavorite ? "star" : "star-outline"} size={24} color="white" />
            </Pressable>
          </View>
        );
      },
    });
  }, [mealId, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <MealItem {...meal} />
      <View style={[styles.card, { flexDirection: "row" }]}>
        <Text style={styles.text}>{meal.isVegan ? "Vegan" : "Not Vegan"}</Text>
        <Text style={styles.text}>
          {meal.isVegetarian ? "Vegetarian" : "Not Vegetarian"}
        </Text>
        <Text style={styles.text}>
          {meal.isGlutenFree ? "Gluten" : "Not Gluten"}
        </Text>
        <Text style={styles.text}>
          {meal.isLactoseFree ? "Lactose" : "Not Lactose"}
        </Text>
      </View>
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Ingredients</Text>
          </View>
          <List data={meal.ingredients} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Steps</Text>
          </View>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 16,
    margin: 16,
  },
  listContainer: {
    width: "80%",
    marginVertical: 8,
  },
  outerListContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    marginVertical: 3,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 8,
    margin: 8,
    textAlign: "center",
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderColor: "#e2b497",
    marginHorizontal: 24,
    marginBottom: 8,
  },
});
