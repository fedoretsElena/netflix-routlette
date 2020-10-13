import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import './Results.scss';
import ResultsSort from '../ResultsSort/ResultsSort';
import ResultsFilter from '../ResultsFilter/ResultsFilter';
import MoviesList from '../MoviesList/MoviesList';
import { deleteMovie, fetchMoviesData } from './../../store/asyncActionCreators';
import { filterByChanged, sortByChanged, editMovieSuccess } from './../../store/actionCreators';
import categoriesVocabulary from './../../mocks/categories';
import { MOVIES_API_PATH } from './../../core/api-config';

function Results({
 movies, loading, error, totalAmount, filterParams,
 fetchMoviesData, deleteMovie, editMovieSuccess, sortByChanged, filterByChanged
}) {
  const {value: searchParam} = useParams();

  useEffect(() => {
    fetchMoviesData({...filterParams, search: searchParam || ''});
  }, [filterParams, searchParam]);

  const handleMovieEditing = (movie) => {
    return fetch(MOVIES_API_PATH, {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.messages.toString());
        }

        editMovieSuccess(data);
      });
  }

  const handleMovieDeleting = (id) => deleteMovie(id);

  const categories = categoriesVocabulary.map((name, inx) =>
    ({id: [name, inx].join('-'), name, active:  filterParams.filter.length ? filterParams.filter.includes(name) : inx === 0}));

  return (
    <main className="results mb-4">
      <div className="container">
        <div className="results__controls d-flex justify-content-between align-items-center mb-3">
          <ResultsFilter categories={categories} onHandleSelected={filterByChanged}/>
          <div className="ml-2"><ResultsSort onHandleChange={sortByChanged}/></div>
        </div>

        {loading && <div className="f-size-18 text-center">Loading...</div>}
        {error && !loading && <div className="f-size-18 text-center">Error happened, status: {status}</div>}

        {!loading && !error && movies &&
          (movies.length
              ? <MoviesList
                totalAmount={totalAmount}
                movies={movies}
                onEditMovie={handleMovieEditing}
                onDeleteMovie={handleMovieDeleting}
              />
              : <div className="results__empty-msg text-center mt-5 pt-5">No Movie Found</div>
          )}
      </div>
    </main>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMoviesData: (params) => dispatch(fetchMoviesData(params)),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    editMovieSuccess: (movie) => dispatch(editMovieSuccess(movie)),
    sortByChanged: (value) => dispatch(sortByChanged(value)),
    filterByChanged: (value) => dispatch(filterByChanged(value))
  };
}

function mapStateToProps(state) {
  const {movies: {data, loading, error, totalAmount}} = state;
  const {filterParams} = state;

  return {movies: data, loading, error, totalAmount, filterParams};
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

Results.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  totalAmount: PropTypes.number,
  filterParams: PropTypes.object,
  fetchMoviesData: PropTypes.func,
  deleteMovie: PropTypes.func,
  editMovieSuccess: PropTypes.func,
  sortByChanged: PropTypes.func,
  filterByChanged: PropTypes.func,
};