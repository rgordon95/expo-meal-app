import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
