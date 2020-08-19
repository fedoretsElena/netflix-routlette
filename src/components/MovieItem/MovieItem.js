import React from 'react';
import PropTypes from 'prop-types';

import './MovieItem.scss';
import MovieActionBtn from "../MovieActionBtn/MovieActionBtn";

const MovieItem = ({movie: {poster_path, title, genres, release_date}}) => {
  const releaseDateYear = new Date(release_date).getFullYear();
  return (
    <div className="movie">
      <div className="movie__poster mb-3">
        <img src={poster_path} alt="poster"/>
        <div className="movie__actions"><MovieActionBtn/></div>
      </div>
      <h5 className="movie__title mb-1">{title}</h5>
      <div className="movie__genre">{genres.join(', ')}</div>
      <div className="movie__release-date">{releaseDateYear}</div>
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object
}

export default MovieItem;