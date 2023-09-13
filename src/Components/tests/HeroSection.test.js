import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from '../HeroSection';

test('HeroSection component renders correctly', () => {
  const { container } = render(<HeroSection />);
  expect(container).toMatchSnapshot();
});
