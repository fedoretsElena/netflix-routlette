import * as ACTIONS from "./actionTypes";

export const fetchMoviesSuccess = (movies) => ({ type: ACTIONS.FETCH_MOVIES_SUCCESS, payload: movies });
export const fetchMoviesFailed = (error) => ({ type: ACTIONS.FETCH_MOVIES_FAILED, payload: error });
export const moviesIsLoading = (loading) => ({ type: ACTIONS.MOVIES_IS_LOADING, payload: loading });

export const createMovieSuccess = (movie) => ({
  type: ACTIONS.CREATE_MOVIE_SUCCESS,
  payload: movie
});

export const editMovieSuccess = (movie) => ({
  type: ACTIONS.EDIT_MOVIE_SUCCESS,
  payload: movie
});

export const deleteMovieSuccess = (id) => ({
  type: ACTIONS.DELETE_MOVIE_SUCCESS,
  payload: id
});

export const sortByChanged = (sortByValue) => ({
  type: ACTIONS.SORT_BY_CHANGED,
  payload: sortByValue
});

export const filterByChanged = (filterByValue) => ({
  type: ACTIONS.FILTER_BY_CHANGED,
  payload: filterByValue
});