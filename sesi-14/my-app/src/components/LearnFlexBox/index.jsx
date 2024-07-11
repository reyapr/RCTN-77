import { View } from "react-native";

export default function LearnFlexBox() {
  return (
    /**
     * flex: 1 100% screen karena container tidak
     * membagi sizenya dengan children lain/ dia tunggal
     */
    <View style={styles.container}>
      {/* 
        ketika boxnya 2 nah maka dia akan membagi 
        sizenya dengan sama rata
       */}

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}
// box1: 1 -> 1/6 -> 16.666666666666668%
// box2: 2 -> 2/6 -> 33.33333333333333%
// box3: 3 -> 3/6 -> 50%
// total: 6
const styles = {
  container: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "row",
    paddingTop: 35,
  },
  box1: {
    flex: 1,
    backgroundColor: "red",
  },
  box2: {
    flex: 2,
    backgroundColor: "yellow",
  },
  box3: {
    flex: 3,
    backgroundColor: "green",
  },
};
