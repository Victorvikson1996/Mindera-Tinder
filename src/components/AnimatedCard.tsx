import React, { useCallback } from 'react';
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

interface Props {
  cat: Cat;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const AnimatedCatCard: React.FC<Props> = React.memo(
  ({ cat, onSwipeLeft, onSwipeRight }) => {
    const translateX = useSharedValue(0);
    const startX = useSharedValue(0);

    const panGesture = Gesture.Pan()
      .onStart(() => {
        startX.value = translateX.value;
      })
      .onUpdate((event) => {
        translateX.value = startX.value + event.translationX;
      })
      .onEnd((event) => {
        if (event.translationX > SWIPE_THRESHOLD) {
          translateX.value = withSpring(width, {}, () => {
            runOnJS(onSwipeRight)();
          });
        } else if (event.translationX < -SWIPE_THRESHOLD) {
          translateX.value = withSpring(-width, {}, () => {
            runOnJS(onSwipeLeft)();
          });
        } else {
          translateX.value = withSpring(0);
        }
      });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { translateX: translateX.value },
        { rotateZ: `${translateX.value / 25}deg` }
      ]
    }));

    return (
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <CatCard cat={cat} />
        </Animated.View>
      </GestureDetector>
    );
  }
);

// Add display name for debugging
AnimatedCatCard.displayName = 'AnimatedCatCard';

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width * 0.88,
    alignSelf: 'center',
    zIndex: 10
  }
});
