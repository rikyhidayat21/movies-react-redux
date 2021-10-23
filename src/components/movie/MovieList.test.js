import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

import MovieList from './MovieList';

describe('MovieList', () => {
  test('renders MovieList component', () => {
    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    screen.debug();
  });

});