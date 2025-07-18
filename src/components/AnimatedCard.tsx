import React, { useCallback } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  useAnimatedGestureHandler
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler
} from 'react-native-gesture-handler';
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

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx: any) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        translateX.value = withSpring(width, {}, () => runOnJS(onSwipeRight)());
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-width, {}, () => runOnJS(onSwipeLeft)());
      } else {
        translateX.value = withSpring(0);
      }
    }
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <CatCard cat={cat} index={index} />
      </Animated.View>
    </PanGestureHandler>
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
