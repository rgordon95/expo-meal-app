import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ affordability, complexity, duration, imageUrl, title, id }) => {

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('MealDetails', { MealId: id });
    }

  return (
    <View style={styles.MealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : styles.button)}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}m</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  detailsItem: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  MealItem: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    margin: 16,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  pressed: {
    opacity: 0.35,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
});
