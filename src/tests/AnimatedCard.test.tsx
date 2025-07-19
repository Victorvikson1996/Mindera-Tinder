import React from 'react';
import { render } from '@testing-library/react-native';
import { AnimatedCatCard } from '@/components/AnimatedCard'; // Adjust the import path as necessary

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
