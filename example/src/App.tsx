import { Text, View, StyleSheet, Platform } from 'react-native';
import { enable, disable } from 'screenshot-preventer';

// const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: 12</Text>
      <Text>Enable Screenshot Prevention</Text>
      <Text
        onPress={() => {
          console.log('Enable Screenshot Prevention', Platform.OS);

          enable();
        }}
        style={{ color: 'blue' }}
      >
        Enable
      </Text>
      <Text>Disable Screenshot Prevention</Text>
      <Text onPress={disable} style={{ color: 'red' }}>
        Disable
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
