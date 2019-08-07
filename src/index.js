import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9AD',
  },
  txt: {
    color: '#333',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Oieee</Text>
    </View>
  );
};

export default App;
