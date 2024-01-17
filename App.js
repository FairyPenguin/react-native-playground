import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Apex Nile!</Text>
      <Text style={styles.titleText}>React On the Mobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
titleText:{
color: '#fff',
fontSize: 50
}
});
