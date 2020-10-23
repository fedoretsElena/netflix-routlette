import moviesReducer from './movies';
import * as ActionCreators from './../actionCreators';

describe('Movies reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      loading: false,
      error: null,
      data: [],
      totalAmount: 0
    };
  })

  it('should return initial state if action is not recognized', () => {
    expect(moviesReducer(initialState, {})).toEqual(initialState);
  })

  it('should return active loading and empty error if action is MOVIES_IS_LOADING', () => {
    const newState = moviesReducer(initialState, ActionCreators.moviesIsLoading(true));
    expect(newState).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  })

  it('should return state with error if action is FETCH_MOVIES_FAILED', () => {
    const error = 'Something goes wrong.';
    const newState = moviesReducer(initialState, ActionCreators.fetchMoviesFailed(error));
    expect(newState).toEqual({
      ...initialState,
      error
    });
  })

  it('should return state with data, totalAmount and empty error if action is FETCH_MOVIES_SUCCESS', () => {
    const data = [{id: 1, title: 'Snakes on a Plane'}];
    const newState = moviesReducer(initialState, ActionCreators.fetchMoviesSuccess({data, totalAmount: data.length}));
    expect(newState).toEqual({
      ...initialState,
      data,
      error: null,
      totalAmount: data.length
    });
  })

  describe('movie actions: create, update, delete', () => {
    let movie = {id: 2, title: 'Three Days of the Condor'};

    it('should return increased totalAmount in state if action is CREATE_MOVIE_SUCCESS', () => {
      const {totalAmount} = moviesReducer(initialState, ActionCreators.createMovieSuccess(movie));
      expect(totalAmount).toBe(initialState.totalAmount + 1);
    })

    it('should update specific movie in state if action is EDIT_MOVIE_SUCCESS', () => {
      const editedTitle = 'Kill Bill';
      const {data} = moviesReducer({data: [movie]}, ActionCreators.editMovieSuccess({...movie, title: editedTitle}));
      const updatedMovie = data.find(({id}) => id === movie.id);
      expect(updatedMovie.title).toBe(editedTitle);
    })

    it('should delete specific movie in state if action is DELETE_MOVIE_SUCCESS', () => {
      const deletedId = movie.id;
      const {data} = moviesReducer({data: [movie]}, ActionCreators.deleteMovieSuccess(deletedId));
      const isExist = data.find(({id}) => id === deletedId);
      expect(isExist).toBeFalsy();
    })
  });
})