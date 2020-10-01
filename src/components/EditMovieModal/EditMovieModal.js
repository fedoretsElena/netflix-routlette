import React from "react";
import { Modal } from "react-bootstrap";
import { PropTypes } from "prop-types";

import MovieForm from './../MovieForm/MovieForm';

export default function EditMovieModal({movie, show, handleClose, handleSubmit}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <div className="form-group">
            <div className="form-label">ID</div>
            <div>{movie.id}</div>
          </div>   
        <MovieForm movie={movie} handleSubmit={handleSubmit} successCallback={handleClose}/>
      </Modal.Body>
    </Modal>
  )
}

EditMovieModal.propTypes = {
  movie: PropTypes.object,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func
}