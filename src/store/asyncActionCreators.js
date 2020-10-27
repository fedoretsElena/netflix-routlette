import {
  deleteMovieSuccess,
  fetchMoviesFailed,
  fetchMoviesSuccess,
  moviesIsLoading,
} from './actionCreators';
import { MOVIES_API_PATH } from './../core/api-config';

export function fetchMoviesData(params = {}) {
  return (dispatch) => {
    dispatch(moviesIsLoading(true));

    return fetch(`${MOVIES_API_PATH}?` + new URLSearchParams(params))
      .then((response) => {
        dispatch(moviesIsLoading(false));

        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json()
          .then((items) => dispatch(fetchMoviesSuccess(items)))
      })
      .catch((error) => dispatch(fetchMoviesFailed(error)));
  }
}

export function deleteMovie(id) {
  return (dispatch) => {
    fetch(`${MOVIES_API_PATH}/${id}`, {method: 'DELETE'})
      .then((response) => dispatch(deleteMovieSuccess(id)))
  }
}
