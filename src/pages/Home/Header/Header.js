import React from 'react';
import { Button } from 'react-bootstrap';

import './Header.scss';
import Logo from '../../../components/Logo/Logo';
import Search from '../Search/Search';

export default function Header() {
  return (
    <header className="header p-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Logo/>

          <Button className="header__add-movie text-uppercase f-size-18 px-4 py-2">+ Add movie</Button>
        </div>
        <Search/>
      </div>
    </header>
  )
}