import React from "react";
import { Modal, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

import MovieForm from './../MovieForm/MovieForm';

export default function EditMovieModal({movie, show, handleClose}) {
  // TODO: editing should be implemented with forms task
  const newMovie = {...movie, title: movie.title + '1', tagline: 'test', runtime: 60};
  return (
    <Modal show={show} onHide={() => handleClose(null)} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <div className="form-group">
            <div className="form-label">ID</div>
            <div>{movie.id}</div>
          </div>   
        <MovieForm />
      </Modal.Body>

      <Modal.Footer>
        <Button type="reset" variant="outline-primary" size="lg">Reset</Button>
        <Button variant="primary" onClick={() => handleClose(newMovie)} size="lg">Submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

EditMovieModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
}