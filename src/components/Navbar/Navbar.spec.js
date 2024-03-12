// Navbar.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Required for testing Link components
import Navbar from './Navbar';

test('renders navbar with logo, navigation links, and proper routing', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Test logo image
  const logoImage = screen.getByRole('img');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', 'NewYorkTimes.png');
  expect(logoImage).toHaveAttribute('alt', 'Logo');

  // Test navigation links
  const navigationLinks = screen.getAllByRole('link');
  expect(navigationLinks).toHaveLength(3);

  navigationLinks.forEach((link, index) => {
    const expectedText = ['Home', 'About', 'Contact'][index];
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(expectedText);
  });
});
