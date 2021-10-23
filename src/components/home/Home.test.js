import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

import Home from './Home';

describe('Home', () => {
  test('renders Home component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    screen.debug();
  });

  test('Find your favorite Movies', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    expect(screen.getByText('Find your favorite Movies')).toBeInTheDocument();
  })
});