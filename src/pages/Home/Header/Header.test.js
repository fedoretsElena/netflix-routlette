import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';

import Header from './Header';

const renderHeader = () => {
  const mockStore = configureStore([]);

  return render(
    <Provider store={mockStore({})}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
}

describe('Header component', () => {
  it('should open modal after click on `Add movie` button', () => {
    renderHeader();
    const button = screen.getByText('+ Add movie');
    fireEvent.click(button);

    expect(screen.getByText('Add movie')).toBeInTheDocument();
  })
})