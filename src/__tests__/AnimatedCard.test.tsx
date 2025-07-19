import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { AnimatedCatCard } from '@/components/AnimatedCard';

afterEach(cleanup);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const { View } = require('react-native');

  const MockGestureDetector = ({ children, gesture, ...props }: any) =>
    React.createElement(View, props, children);

  const MockPanGestureHandler = ({ children, ...props }: any) =>
    React.createElement(View, props, children);

  const createMockGesture = () => ({
    onUpdate: jest.fn().mockReturnThis(),
    onEnd: jest.fn().mockReturnThis(),
    onStart: jest.fn().mockReturnThis(),
    onBegin: jest.fn().mockReturnThis(),
    onFinalize: jest.fn().mockReturnThis(),
    enabled: jest.fn().mockReturnThis(),
    shouldCancelWhenOutside: jest.fn().mockReturnThis(),
    runOnJS: jest.fn().mockReturnThis()
  });

  return {
    PanGestureHandler: MockPanGestureHandler,
    GestureDetector: MockGestureDetector,
    State: {
      UNDETERMINED: 0,
      FAILED: 1,
      BEGAN: 2,
      CANCELLED: 3,
      ACTIVE: 4,
      END: 5
    },
    gestureHandlerRootHOC: (component: any) => component,
    Directions: {
      RIGHT: 1,
      LEFT: 2,
      UP: 4,
      DOWN: 8
    },
    Gesture: {
      Pan: createMockGesture,
      Tap: createMockGesture,
      LongPress: createMockGesture,
      Fling: createMockGesture,
      Pinch: createMockGesture,
      Rotation: createMockGesture
    },
    runOnJS: jest.fn((fn) => fn)
  };
});

describe('AnimatedCard', () => {
  it('renders correctly', () => {
    const mockCat = {
      id: '1',
      name: 'Whiskers',
      origin: 'FR',
      image: { id: 'img1', url: 'cat.png' }
    };

    const { toJSON } = render(
      <AnimatedCatCard
        cat={mockCat}
        onSwipeLeft={() => {}}
        onSwipeRight={() => {}}
        index={0}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
