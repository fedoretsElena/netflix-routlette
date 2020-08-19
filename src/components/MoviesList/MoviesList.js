import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({movies}) => {
  return (
    <section>
      <div className="f-size-20 py-1"><b>{movies.length}</b> movies found</div>

      <div className="movies mt-2">
        {movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
      </div>
    </section>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList;