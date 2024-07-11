import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const LearnInput = () => {
  const [name, setName] = useState("");

  const handleChange = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn Input</Text>
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        value={name}
      />
      <View style={styles.display}>
        <Text>Display:</Text>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  title: {
    paddingTop: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 4,
    margin: 10,
    padding: 10,
  },
  display: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default LearnInput;
