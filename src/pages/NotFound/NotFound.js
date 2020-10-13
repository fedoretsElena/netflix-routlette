import React from 'react';
import { Link } from "react-router-dom";

import notFound from './../../images/404.png';
import Logo from './../../components/Logo/Logo';

export default function NotFound() {

  return (<main className="not-found">
    <header className="not-found__header position-fixed p-3"><Logo/></header>
    <section className="d-flex flex-column align-items-center justify-content-center py-4 min-vh-100">
      <img className="w-50" src={notFound} alt="404"/>
      <Link to='/' className="btn btn-lg btn-outline-primary mt-5">Go back to home</Link>
    </section>
  </main>);
}