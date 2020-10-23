import React from 'react';
import { render, screen } from '@testing-library/react';

import EditMovieModal from './EditMovieModal';

describe('EditMovieModal component', () => {
  it('should include movie id on the page', () => {
    const movie = {id: 1};
    render(<EditMovieModal movie={movie} show={true}/>);

    expect(screen.getByText(movie.id.toString())).toBeInTheDocument();
  })
})