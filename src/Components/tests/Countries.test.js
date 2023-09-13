import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Countries from '../Countries';

test('Countries component renders correctly', () => {
  const { container } = render(
    <Router>
      <Countries />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
