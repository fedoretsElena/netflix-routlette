import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent } from '@testing-library/dom';

import Results from './Results';
import { initialState as moviesInitialState } from './../../store/reducers/movies';
import { initialState as filterParamsInitialState } from './../../store/reducers/filterParams';

function renderResults({editMovieSuccess, movies}) {
  const mockStore = configureStore([thunk]);
  const initialState = {
    movies: {...moviesInitialState},
    filterParams: {...filterParamsInitialState}
  }

  return render(
    <Provider store={mockStore(initialState)}>
      <MemoryRouter>
        <Results editMovieSuccess={editMovieSuccess} movies={movies}/>
      </MemoryRouter>
    </Provider>
  );
}

describe('Results component', () => {
  it('should render component', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const {container} = renderResults({});

    expect(container).toBeDefined();
  })

  it.skip('should have been called editMovieSuccess after click on editBtn', async() => {
    const editMovieSuccess = jest.fn();
    const movies = [{id: 1}, {id: 2}];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([movies]),
      })
    );

    await renderResults({editMovieSuccess, movies, loading: false});
    const editBtn = await screen.getByRole('listitem', {name: 'Edit'});

    fireEvent.click(editBtn);

    expect(editMovieSuccess).toHaveBeenCalled();
  })
});