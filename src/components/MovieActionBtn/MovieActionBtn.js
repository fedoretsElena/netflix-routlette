import React from "react";
import * as Icon from 'react-bootstrap-icons';

import './MovieActionBtn.scss';

export default class MovieActionBtn extends React.Component {
  state = {
    isOpen: false
  }

  constructor(props) {
    super(props);

    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  onToggleMenu() {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }));
  }

  render() {
    const {isOpen} = this.state;

    return (
      <div onMouseLeave={isOpen ? this.onToggleMenu : () => {}}>
        <div className="action-btn d-flex align-items-center justify-content-center">
          <div onClick={this.onToggleMenu}><Icon.ThreeDotsVertical/></div>
          {isOpen && <ul className="action-btn__menu menu pt-4 pb-2 px-0">
            <li className="menu__close-item" onClick={this.onToggleMenu}>x</li>
            <li className="menu__item">Edit</li>
            <li className="menu__item">Delete</li>
          </ul>
          }
        </div>
      </div>
    )
  }
}
