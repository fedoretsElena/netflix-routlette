import React from "react";
import * as Icon from "react-bootstrap-icons";
import { PropTypes } from "prop-types";

import "./MovieActionBtn.scss";
import { useToggle } from "./../../hooks";

export default function MovieActionBtn({handleDeleteClick, handleEditClick}) {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
      <div onMouseLeave={isOpen ? toggleOpen : () => {}}>
        <div className="action-btn d-flex align-items-center justify-content-center">
          <div onClick={toggleOpen}><Icon.ThreeDotsVertical/></div>
          {isOpen && <ul className="action-btn__menu menu pt-4 pb-2 px-0">
            <li className="menu__close-item" onClick={toggleOpen}>x</li>
            <li className="menu__item" onClick={handleEditClick}>Edit</li>
            <li className="menu__item" onClick={handleDeleteClick}>Delete</li>
          </ul>
          }
        </div>
      </div>
  )
}

MovieActionBtn.propTypes = {
  handleDeleteClick: PropTypes.func,
  handleEditClick: PropTypes.func
}
