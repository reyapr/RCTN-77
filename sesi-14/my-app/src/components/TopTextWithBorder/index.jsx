import { Text, View } from "react-native";

const TopTextWithBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#C68B59",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: "black",
    marginLeft: 25,
    marginRight: 25,
    padding: 10,
    backgroundColor: "cyan",
  },
};

export default TopTextWithBox;
