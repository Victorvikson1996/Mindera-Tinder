import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Colors } from '@/utils/Colors';

const { width } = Dimensions.get('window');

const icons = [
  { name: 'paw', route: 'Home', activeColor: Colors.paw },
  {
    name: 'chatbubble-outline',
    route: 'Counter',
    activeColor: Colors.paw
  },
  { name: 'person-outline', route: 'Profile', activeColor: Colors.paw }
];

export const CustomTabBar = ({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {icons.map((icon, idx) => {
          const isFocused = state.index === idx;
          const onPress = () => {
            if (!isFocused) navigation.navigate(icon.route as never);
          };
          return (
            <TouchableOpacity
              key={icon.route}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.tab}
              activeOpacity={0.8}
            >
              <Ionicons
                name={icon.name as any}
                size={24}
                color={isFocused ? icon.activeColor : Colors.dark}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 99
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 50,
    width: width * 0.5,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 10
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2
  },
  pinkDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Colors.paw,
    marginTop: 4
  }
});
