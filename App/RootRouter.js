import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

import {
  constAndLet,
  // arrowFunctions,
  // destructuring,
  // objAssemblyComputedProps,
  // spreadOperator,
  // promises
} from './examples';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// alert('test');
constAndLet();
export default () => (
  <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </SafeAreaView>
);
