import React from "react";
import { Modal, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

import MovieForm from './../MovieForm/MovieForm';

export default function AddMovieModal({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <MovieForm />
      </Modal.Body>

      <Modal.Footer>
        <Button type="reset" variant="outline-primary" size="lg">Reset</Button>
        <Button variant="primary" onClick={handleClose} size="lg">Submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

AddMovieModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
}