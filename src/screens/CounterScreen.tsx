import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

export const CounterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterText}>02</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  counterText: {
    fontSize: 72,
    color: '#bbb',
    fontWeight: 'bold'
  }
});
