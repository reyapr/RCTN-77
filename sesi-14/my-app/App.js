import { View } from 'react-native';
import LearnFlexBox from './src/components/LearnFlexBox';
import TopTextWithBox from './src/components/TopTextWithBorder';
import LearnInput from './src/components/LearnInput';
import ItemListScrollView from './src/components/ItemListScrollView';
import ItemListFlatList from './src/components/ItemListFlatList';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <LearnFlexBox /> */}
      {/* <TopTextWithBox /> */}
      {/* <LearnInput /> */}
      {/* <ItemListScrollView /> */}
      <ItemListFlatList />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  }
}