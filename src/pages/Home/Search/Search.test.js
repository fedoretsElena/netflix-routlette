import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Search from './Search';
import { MemoryRouter } from "react-router";

describe('Search component', () => {
  it('should call handleSubmit callback', async () => {
    const handleSearch = jest.fn();
    render(
      <MemoryRouter>
        <Search handleSearch={handleSearch}/>
      </MemoryRouter>
    );
    const query = ' Captain America ';
    const submitBtn = screen.getByRole('button');
    const searchField = screen.getByRole('textbox');

    fireEvent.change(searchField, {
      target: {
        value: query
      }
    })

    fireEvent.click(submitBtn);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith(query.trim());
  })
})