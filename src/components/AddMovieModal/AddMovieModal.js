import React from "react";
import { Modal } from "react-bootstrap";
import { PropTypes } from "prop-types";

import MovieForm from './../MovieForm/MovieForm';

export default function AddMovieModal({show, handleClose, handleSubmit}) {
  return (
    <Modal id="add-movie-modal" show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <MovieForm handleSubmit={handleSubmit}/>
      </Modal.Body>
    </Modal>
  )
}

AddMovieModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func
}