import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({movies, totalAmount, onDeleteMovie, onEditMovie}) => {
  return (
    <section>
      <div className="f-size-20 py-1"><b>{totalAmount}</b> movies found</div>

      <div className="movies mt-2">
        {movies.map((movie) => 
          <MovieItem 
            movie={movie}
            key={movie.id} 
            onEditMovie={onEditMovie}
            onDeleteMovie={onDeleteMovie}
         />)}
      </div>
    </section>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  totalAmount: PropTypes.number,
  onDeleteMovie: PropTypes.func,
  onEditMovie: PropTypes.func
}

export default MoviesList;