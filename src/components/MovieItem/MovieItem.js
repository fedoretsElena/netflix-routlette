import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MovieItem.scss';
import MovieActionBtn from '../MovieActionBtn/MovieActionBtn';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';

const MovieItem = ({movie: {id, poster_path, title, genres, release_date}, onDeleteMovie, onEditMovie}) => {
  const releaseDateYear = new Date(release_date).getFullYear();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditModalClose = () => setShowEditModal(false);
  const handleDeleteModalClose = () => setShowDeleteModal(false);

  const handleEditModalShow = () => setShowEditModal(true);
  const handleDeleteModalShow = () => setShowDeleteModal(true);

  return (<>
      <div className="movie">
        <div className="movie__poster mb-3">
          <img src={poster_path} alt="poster"/>
          <div className="movie__actions">
            <MovieActionBtn 
              handleEditClick={handleEditModalShow} 
              handleDeleteClick={handleDeleteModalShow}
            /></div>
        </div>
        <h5 className="movie__title mb-1">{title}</h5>
        <div className="movie__genre">{genres.join(', ')}</div>
        <div className="movie__release-date">{releaseDateYear}</div>
      </div>

      <EditMovieModal show={showEditModal} handleClose={handleEditModalClose} />
      <DeleteMovieModal show={showDeleteModal} handleClose={handleDeleteModalClose} />
    </>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object,
  onDeleteMovie: PropTypes.func,
  onEditMovie: PropTypes.func
}

export default MovieItem;