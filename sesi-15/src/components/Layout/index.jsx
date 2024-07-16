import { View, Text, StyleSheet } from "react-native";

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center", // ikut flex direction
    alignItems: "center", // berlawanan dengan flex direction
  },
  box: {
    height: 100,
    width: 100,
  },
  box1: {
    backgroundColor: "lightblue", // 1/11.5 = 8.6%
  },
  box2: {
    backgroundColor: "green", // 10 / 11.5 = 86.95%
  },
  box3: {
    backgroundColor: "orange", // 0.5 / 11.5 = 4.3%
  },
});

export default Layout;
