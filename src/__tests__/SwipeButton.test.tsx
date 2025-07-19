import React from 'react';
import { render } from '@testing-library/react-native';
import { SwipeButtons } from '@/components/SwipeButton';

describe('SwipeButton', () => {
  it('renders correctly', () => {
    const mockProps = { onLeft: jest.fn(), onRight: jest.fn() };
    const { toJSON } = render(<SwipeButtons {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
