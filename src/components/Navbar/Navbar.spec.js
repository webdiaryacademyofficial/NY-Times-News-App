// Navbar.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar with logo and navigation links', () => {
  render(<Navbar />);

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
