import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  beforeAll(() => {
    render(<App />);
  })

  it('should have the right message in the dom', () => {
    const message = 'I\'m alive!';

    expect(screen.getByText(message)).toBeInTheDocument();
  })

  afterAll(cleanup);
})