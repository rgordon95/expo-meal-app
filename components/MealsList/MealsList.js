import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ meals }) => {
  const RenderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      imageUrl: item.imageUrl,
      title: item.title,
      id: item.id,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <FlatList
      data={meals}
      renderItem={RenderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
