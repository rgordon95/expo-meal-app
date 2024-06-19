import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  // const pressHandler = () => {
  //     navigation.navigate('MealsOverview');
  // }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => (
          <CategoryGridTile
            color={itemData.item.color}
            title={itemData.item.title}
            onPress={() => navigation.navigate("MealsOverview", { categoryId: itemData.item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;
