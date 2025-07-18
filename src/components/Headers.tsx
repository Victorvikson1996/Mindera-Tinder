import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CatTinderHeader = () => {
  const [selected, setSelected] = useState<'fire' | 'star'>('fire');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setSelected('fire')}
        style={[
          styles.iconWrapper,
          selected === 'fire' && styles.activeIconWrapper
        ]}
      >
        <Ionicons
          name='flame'
          size={20}
          color={selected === 'fire' ? '#ff5a76' : '#B0B0B0'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelected('star')}
        style={[
          styles.iconWrapper,
          selected === 'star' && styles.activeIconWrapper
        ]}
      >
        <Ionicons
          name='star'
          size={20}
          color={selected === 'star' ? '#ff5a76' : '#B0B0B0'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 32,
    width: 80,
    height: 40,
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeIconWrapper: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4
  }
});
