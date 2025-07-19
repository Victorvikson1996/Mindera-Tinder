import React from 'react';
import { render } from '@testing-library/react-native';
import { CustomTabBar } from '@/components/CustomTabBar';

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons'
}));

describe('CustomTabBar', () => {
  it('renders correctly', () => {
    const mockProps = {
      state: {
        key: 'key',
        index: 0,
        routeNames: ['Home', 'Counter', 'Profile'],
        routes: [
          { key: 'home', name: 'Home' },
          { key: 'counter', name: 'Counter' },
          { key: 'profile', name: 'Profile' }
        ],
        type: 'tab' as const,
        stale: false
      },
      descriptors: {
        home: {
          options: { title: 'Home' },
          render: () => null,
          route: { key: 'home', name: 'Home' },
          navigation: {} as any
        },
        counter: {
          options: { title: 'Counter' },
          render: () => null,
          route: { key: 'counter', name: 'Counter' },
          navigation: {} as any
        },
        profile: {
          options: { title: 'Profile' },
          render: () => null,
          route: { key: 'profile', name: 'Profile' },
          navigation: {} as any
        }
      },
      navigation: {
        dispatch: jest.fn(),
        navigate: jest.fn(),
        navigateDeprecated: jest.fn(),
        preload: jest.fn(),
        resetRoot: jest.fn(),
        canGoBack: jest.fn(),
        getId: jest.fn(),
        getParent: jest.fn(),
        getState: jest.fn(),
        goBack: jest.fn(),
        isFocused: jest.fn(),
        setOptions: jest.fn(),
        setParams: jest.fn(),
        dangerouslyGetParent: jest.fn(),
        dangerouslyGetState: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        emit: jest.fn()
      },

      insets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    };

    const component = render(<CustomTabBar {...mockProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
