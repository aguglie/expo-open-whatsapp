import { StyleSheet, Text, View } from 'react-native';

import * as ExpoOpenWhatsapp from 'expo-open-whatsapp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoOpenWhatsapp.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
