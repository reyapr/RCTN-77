import { FlatList, StyleSheet, Text, View } from "react-native";
import { randomText } from "../../constants/randomTxt";

const ItemListFlatList = () => {
  return (
    <View style={styles.container}>
      <Text>ItemListFlatList</Text>
      <FlatList
        style={styles.scrollView}
        data={randomText}
        keyExtractor={(item) => item.title}
        renderItem={(data) => {
          return (
            <View style={styles.box}>
              <Text style={styles.title}>{data.item.title}</Text>
              <Text style={styles.description}>{data.item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  scrollView: {
    backgroundColor: "#C2B8A3",
    paddingLeft: 5,
    paddingRight: 5,
  },
  box: {
    backgroundColor: "#FEF7DC",
    padding: 10,
    gap: 5,
    borderRadius: 8,
    margin: 5,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ItemListFlatList;
