import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navbar from '../Navbar';

const initialState = {
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

test('Navbar component renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
