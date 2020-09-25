import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";

import './Header.scss';
import './../../../components/Header/Header.scss';
import Logo from '../../../components/Logo/Logo';
import Search from '../Search/Search';
import AddMovieModal from "../../../components/AddMovieModal/AddMovieModal";
import { createMovie } from "./../../../store/asyncActionCreators";

function Header({createMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = (value) => {
    setShow(false);
    if (value) {
      createMovie(value);
    }
  }
  const handleShow = () => setShow(true);

  return (
    <header className="img-blur-container header p-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Logo/>

          <Button
            className="header__add-movie text-uppercase f-size-18 px-4 py-2"
            onClick={handleShow}
          >+ Add movie</Button>

          <AddMovieModal show={show} handleClose={handleClose}/>
        </div>
        <Search/>
      </div>
    </header>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    createMovie: (movie) => dispatch(createMovie(movie))
  }
}

export default connect(null, mapDispatchToProps)(Header);
