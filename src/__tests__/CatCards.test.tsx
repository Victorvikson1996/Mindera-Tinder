import React from 'react';
import { render } from '@testing-library/react-native';
import { CatCard } from '@/components/CatCards';

describe('CatCards', () => {
  it('renders correctly', () => {
    const mockCat = {
      id: '1',
      name: 'Whiskers',
      origin: 'FR',
      image: { id: 'img1', url: 'cat.png' }
    };
    const { toJSON } = render(<CatCard cat={mockCat} index={0} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
