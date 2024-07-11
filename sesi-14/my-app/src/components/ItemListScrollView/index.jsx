import { ScrollView, StyleSheet, Text, View } from "react-native";
import { randomText } from "../../constants/randomTxt";

const ItemListScrollView = () => {
  return (
    <View style={styles.container}>
      <Text>ItemListScrollView</Text>
      <ScrollView style={styles.scrollView}>
        {randomText.map((text) => (
          <View key={text.title} style={styles.box}>
            <Text style={styles.title}>{text.title}</Text>
            <Text style={styles.description}>{text.description}</Text>
          </View>
        ))}
      </ScrollView>
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

export default ItemListScrollView;
