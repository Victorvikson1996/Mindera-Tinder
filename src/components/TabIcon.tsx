import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

interface TabBarIconProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  focused: boolean;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  const color = focused ? '#e75480' : '#bbb';

  return (
    <View style={styles.iconWrapper}>
      <Ionicons name={name} size={26} color={color} />
      {focused && <View style={styles.dot} />}
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e75480',
    marginTop: 4
  }
});
