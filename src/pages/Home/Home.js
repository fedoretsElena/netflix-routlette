import React from 'react';
import { useParams } from 'react-router';

import Header from './Header/Header';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Results from './../../components/Results';
import Footer from './../../components/Footer/Footer';

function Home() {
  const params = useParams();

  return (
    <>
    <ErrorBoundary>
      <Header/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Results params={params} />
    </ErrorBoundary>
    <div className='footer'><Footer/></div>
  </>
)}

export default Home;