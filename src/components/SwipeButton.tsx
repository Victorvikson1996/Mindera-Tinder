import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  onLeft: () => void;
  onRight: () => void;
}

export const SwipeButtons: React.FC<ButtonProps> = React.memo(
  ({ onLeft, onRight }) => (
    <View style={styles.row}>
      <TouchableOpacity style={[styles.button, styles.red]} onPress={onLeft}>
        <Ionicons name='close' size={36} color='#e75480' />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.green]} onPress={onRight}>
        <Ionicons name='heart' size={36} color='#4caf50' />
      </TouchableOpacity>
    </View>
  )
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 18,
    // shadow for iOS/Android
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 6
  },
  red: {},
  green: {}
});
