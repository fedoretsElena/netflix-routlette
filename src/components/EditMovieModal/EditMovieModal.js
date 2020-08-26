import React from "react";
import { Modal, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

import MovieForm from './../MovieForm/MovieForm';

export default function EditMovieModal({show, handleClose}) {
  const categories = ['Adventure', 'Drama', 'Comedy'];
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <div className="form-group">
            <div className="form-label">ID</div>
            <div>FDSF-FSDFSD-fmksfj-daDFS</div>    
          </div>   
        <MovieForm />
      </Modal.Body>

      <Modal.Footer>
        <Button type="reset" variant="outline-primary" size="lg">Reset</Button>
        <Button variant="primary" onClick={handleClose} size="lg">Submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

EditMovieModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
}