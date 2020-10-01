import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import './Header.scss';
import './../../../components/Header/Header.scss';
import Logo from '../../../components/Logo/Logo';
import Search from '../Search/Search';
import AddMovieModal from '../../../components/AddMovieModal/AddMovieModal';
import { createMovieSuccess } from './../../../store/actionCreators';
import { MOVIES_API_PATH } from './../../../core/api-config';

function Header({createMovieSuccess}) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (value) => {
    history.push(`/search/${value}`);
  };

  const createMovie = (movie) => {
    return fetch(MOVIES_API_PATH, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async response => {
      const data = await response.json();
        if (!response.ok) {
          throw new Error(data.messages.toString());
        }

        delete data.id;

        createMovieSuccess(data);
        handleClose();
      });
  }

  return (
    <header className="img-blur-container header p-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Logo/>

          <Button
            className="header__add-movie text-uppercase f-size-18 px-4 py-2"
            onClick={handleShow}
          >+ Add movie</Button>

          <AddMovieModal show={show} handleClose={handleClose} handleSubmit={createMovie}/>
        </div>
        <Search handleSearch={handleSearch}/>
      </div>
    </header>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    createMovieSuccess: (movie) => dispatch(createMovieSuccess(movie))
  }
}

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  createMovieSuccess: PropTypes.func
}