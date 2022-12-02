import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import  Add  from './view/Add/Add';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test(' teste Add' , () => {
//   render(<Add/>)
// })
