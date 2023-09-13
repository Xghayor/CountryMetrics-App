import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CountryStats from '../Countries';

const initialState = {
  countries: {
    countries: [],
    loading: false,
    error: null,
  },
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

test('CountryStats component renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <CountryStats />
      </MemoryRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
