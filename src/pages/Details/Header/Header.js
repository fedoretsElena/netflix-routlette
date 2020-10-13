import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import './../../../components/Header/Header.scss';
import Logo from "./../../../components/Logo/Logo";

export default function Header() {
  return <header className="container header d-flex justify-content-between align-items-center py-3">
    <Logo/>

    <Link to="/" className="text-primary f-size-20"><Icon.Search/></Link>
  </header>
}
