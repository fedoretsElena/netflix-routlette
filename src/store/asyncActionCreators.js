import {
  createMovieSuccess,
  deleteMovieSuccess, editMovieSuccess,
  fetchMoviesFailed,
  fetchMoviesSuccess,
  moviesIsLoading,
} from "./actionCreators";
import { MOVIES_API_PATH } from "./../core/api-config";
import { sleeper } from "./../core/helpers";

export function moviesFetchData(params = {}) {
  return (dispatch) => {
    dispatch(moviesIsLoading(true));
    fetch(`${MOVIES_API_PATH}?` + new URLSearchParams(params))
      .then(sleeper(3000))
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

export function createMovie(movie) {
  return (dispatch) => {
    fetch(MOVIES_API_PATH, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then((response) => response.json()
        .then((movie) => dispatch(createMovieSuccess(movie))))
  }
}

export function editMovie(movie) {
  return (dispatch) => {
    fetch(MOVIES_API_PATH, {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then((response) => response.json()
        .then((movie) => dispatch(editMovieSuccess(movie))))
  }
}
