import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Main from './components/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});