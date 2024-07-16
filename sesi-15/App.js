import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Login from './src/components/Login';
import Layout from './src/components/Layout';
import Users from './src/components/Users';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Layout /> */}
      <Users />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
