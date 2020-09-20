import React from "react";
import {Modal, Button} from "react-bootstrap";
import { PropTypes } from "prop-types";

export default function DeleteMovieModal({show, handleClose}) { 
  return (
    <Modal show={show} onHide={() => handleClose(false)} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Delete movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="f-size-20">Are you sure you want to delete this movie?</div>
      </Modal.Body>

      <Modal.Footer> 
        <Button variant="primary" onClick={() => handleClose(true)} size="lg">Confirm</Button>
      </Modal.Footer>
    </Modal>
  )
}

DeleteMovieModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
}