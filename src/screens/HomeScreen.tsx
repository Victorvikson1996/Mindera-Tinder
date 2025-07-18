import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import useCats from '@/hooks/useCats';
import { AnimatedCatCard } from '@/components/AnimatedCard';
import { SwipeButtons } from '@/components/SwipeButton';

export const HomeScreen = () => {
  const { cats, loading, onSwipeLeft, onSwipeRight, currentCatIndex } =
    useCats();

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size='large' />;

  const currentCat = cats[currentCatIndex];

  return (
    <View style={styles.container}>
      {currentCat && (
        <AnimatedCatCard
          cat={currentCat}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
        />
      )}
      <SwipeButtons onLeft={onSwipeLeft} onRight={onSwipeRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
