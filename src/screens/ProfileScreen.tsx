import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
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
    fontSize: 32,
    color: '#222',
    fontWeight: 'bold'
  }
});
