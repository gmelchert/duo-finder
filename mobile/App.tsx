import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native!</Text>
        <Button title='Send 1' />
        <Button title='Send 2' />
        <Button title='Send 3' />
        <Button title='Hello World' />
      <StatusBar style="auto" backgroundColor='#fdd'/>
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
  title: {
    color: '#FDD',
    fontSize: 22
  },
  button: {
    borderBottomColor: '#fdd',
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 5,
    marginTop: 5
  }
});
