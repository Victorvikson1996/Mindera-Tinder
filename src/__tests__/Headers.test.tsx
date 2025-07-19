import React from 'react';
import { render } from '@testing-library/react-native';
import { CatTinderHeader } from '@/components/Headers';

describe('Headers', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<CatTinderHeader />);
    expect(toJSON()).toMatchSnapshot();
  });
});
