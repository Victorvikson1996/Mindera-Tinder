import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/screens/HomeScreen';
import { CounterScreen } from '@/screens/CounterScreen';
import { ProfileScreen } from '@/screens/ProfileScreen';
import { RootTabParamList } from './types';
import { TabBarIcon } from '@/components/TabIcon';
import { View, StyleSheet, Platform } from 'react-native';
import { CustomTabBar } from '@/components/CustomTabBar';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Counter' component={CounterScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 36,
    right: 36,
    bottom: 30,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 12,
    borderTopWidth: 0,
    paddingHorizontal: 24
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  }
});
