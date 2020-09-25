import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./Results.scss";
import ResultsSort from "../ResultsSort/ResultsSort";
import ResultsFilter from "../ResultsFilter/ResultsFilter";
import MoviesList from "../MoviesList/MoviesList";
import { deleteMovie, editMovie, moviesFetchData } from "./../../store/asyncActionCreators";
import { filterByChanged, sortByChanged } from "./../../store/actionCreators";
import categoriesVocabulary from "./../../mocks/categories";

function Results({
 movies, loading, error, totalAmount, filterParams,
 fetchMoviesData, deleteMovie, editMovie, sortByChanged, filterByChanged
}) {
  useEffect(() => {
    fetchMoviesData(filterParams);
  }, [filterParams]);

  useEffect(() => {
    fetchMoviesData(filterParams);
  }, []);

  const handleMovieEditing = (movie) => editMovie(movie);

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
    fetchMoviesData: (params) => dispatch(moviesFetchData(params)),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    editMovie: (movie) => dispatch(editMovie(movie)),
    sortByChanged: (value) => dispatch(sortByChanged(value)),
    filterByChanged: (value) => dispatch(filterByChanged(value))
  };
}

function mapStateToProps(state) {
  console.log('State', state);
  const {movies: {data, loading, error, totalAmount}} = state;
  const {filterParams} = state;

  return {movies: data, loading, error, totalAmount, filterParams};
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
