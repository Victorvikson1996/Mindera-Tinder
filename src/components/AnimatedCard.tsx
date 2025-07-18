import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { CatCard } from './CatCards';
import { Cat } from '@/types/cattypes';

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.28;

interface CardProps {
  cat: Cat;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  index: number;
}

export const AnimatedCatCard: React.FC<CardProps> = ({
  cat,
  onSwipeLeft,
  onSwipeRight,
  index
}) => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotateZ: `${translateX.value / 25}deg` }
    ]
  }));

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        translateX.value = withSpring(width, {}, () => {
          runOnJS(onSwipeRight)();
          translateX.value = 0;
        });
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-width, {}, () => {
          runOnJS(onSwipeLeft)();
          translateX.value = 0;
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <CatCard cat={cat} index={index} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: width - 32,
    marginTop: 4,
    zIndex: 10
  }
});
