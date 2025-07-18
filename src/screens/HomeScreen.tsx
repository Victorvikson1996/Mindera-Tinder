import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  SafeAreaView
} from 'react-native';
import useCats from '@/hooks/useCats';
import { AnimatedCatCard } from '@/components/AnimatedCard';
import { SwipeButtons } from '@/components/SwipeButton';
import { CatTinderHeader } from '@/components/Headers';

export const HomeScreen = () => {
  const { cats, loading, onSwipeLeft, onSwipeRight, currentCatIndex } =
    useCats();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <CatTinderHeader />
        <ActivityIndicator size='large' style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }

  const currentCat = cats[currentCatIndex];

  return (
    <SafeAreaView style={styles.container}>
      <CatTinderHeader />
      <View style={{ flex: 1, alignItems: 'center' }}>
        {currentCat && (
          <AnimatedCatCard
            cat={currentCat}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            index={currentCatIndex + 1}
          />
        )}
      </View>
      <View style={styles.swipeButtonsWrapper}>
        <SwipeButtons onLeft={onSwipeLeft} onRight={onSwipeRight} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafd',
    paddingHorizontal: 0,
    justifyContent: 'flex-start'
  },

  swipeButtonsWrapper: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center'
  }
});
