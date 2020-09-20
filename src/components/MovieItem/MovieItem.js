import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import './MovieItem.scss';
import MovieActionBtn from '../MovieActionBtn/MovieActionBtn';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';

const MovieItem = ({movie, onDeleteMovie, onEditMovie}) => {
  const {id, poster_path, title, genres, release_date} = movie;
  const releaseDateYear = useMemo(() => new Date(release_date).getFullYear(), [release_date]);
  const genresList = useMemo(() => genres.join(', '), [genres]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditModalClose = useCallback((value) => {
    setShowEditModal(false);
    if (value) {
      onEditMovie(value);
    }
  }, [id]);

  const handleDeleteModalClose = useCallback((agree) => {
    setShowDeleteModal(false);
    if (agree) {
      onDeleteMovie(id);
    }
  }, [id]);

  const handleEditModalShow = useCallback(() => setShowEditModal(true), [id]);
  const handleDeleteModalShow = useCallback(() => setShowDeleteModal(true), [id]);

  return (<>
      <div className="movie">
        <div className="movie__poster pb-3">
          <img src={poster_path} alt="poster"/>
          <div className="movie__actions">
            <MovieActionBtn 
              handleEditClick={handleEditModalShow} 
              handleDeleteClick={handleDeleteModalShow}
            /></div>
        </div>
        <h5 className="movie__title text-truncate mb-1">{title}</h5>
        <div className="movie__genre">{genresList}</div>
        <div className="movie__release-date">{releaseDateYear}</div>
      </div>

      <EditMovieModal movie={movie} show={showEditModal} handleClose={handleEditModalClose} />
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