import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface TabBarIconProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  return (
    <Ionicons name={name} size={28} color={focused ? '#e75480' : '#bbb'} />
  );
};

export default TabBarIcon;
