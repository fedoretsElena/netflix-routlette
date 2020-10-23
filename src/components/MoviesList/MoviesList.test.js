import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';

import MoviesList from './MoviesList';

function renderMoviesList({movies, totalAmount}) {
  return render(<MemoryRouter><MoviesList movies={movies} totalAmount={totalAmount}/></MemoryRouter>);
}

describe('MoviesList component', () => {
  it('should render totalAmount', () => {
    const totalAmount = 2;
    renderMoviesList({totalAmount});

    expect(screen.getByText(totalAmount.toString())).toBeInTheDocument();
  });

  it('should render 1 movie', () => {
    const movies = [{id: 1, genres: ['Horror']}];
    const {container} = renderMoviesList({movies, totalAmount: movies.length});

    expect(container.querySelectorAll('.movie')).toHaveLength(movies.length);
  });
})