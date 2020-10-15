import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import MovieForm from './MovieForm';

describe('MovieForm component', () => {
  it('should patch form if movie props exist', () => {
    const movie = {title: 'Bonnie and Clyde'}
    render(<MovieForm movie={movie}/>);
    expect(screen.getByDisplayValue(movie.title)).toBeInTheDocument();
  })

  it('should call handleSubmit callback', async () => {
    const handleSubmit = jest.fn();
    render(<MovieForm handleSubmit={handleSubmit}/>);
    const submit = screen.getByRole('button', { name: "Submit"});

    await waitFor(() => {
      fireEvent.click(submit);
    });

    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  })
})