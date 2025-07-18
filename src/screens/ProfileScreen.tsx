import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>03</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 72,
    color: '#bbb',
    fontWeight: 'bold'
  }
});
