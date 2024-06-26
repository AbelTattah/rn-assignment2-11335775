import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>My name is <Text style={styles.name}>Tattah Abel Mawunyo</Text></Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    color:'white',
    fontSize:24,
    fontWeight:'bold'
  },
  description:{
    color:'white',
    fontSize:24,
  }
});
