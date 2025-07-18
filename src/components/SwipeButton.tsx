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
      <TouchableOpacity
        style={styles.button}
        onPress={onLeft}
        accessibilityLabel='Dislike'
      >
        <Ionicons name='close' size={32} color='#e75480' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onRight}
        accessibilityLabel='Like'
      >
        <Ionicons name='heart' size={32} color='#4caf50' />
      </TouchableOpacity>
    </View>
  )
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginTop: 16,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 18,
    elevation: 2,
    marginHorizontal: 12,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 5
  }
});
