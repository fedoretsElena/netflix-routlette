import React from 'react';

import Header from './Header/Header';
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Results from "./../../components/Results/Results";
import Footer from "./../../components/Footer/Footer";

export default class Home extends React.Component {
  render() {
    return <>
      <ErrorBoundary>
        <Header/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Results/>
      </ErrorBoundary>
      <div className="footer"><Footer/></div>
    </>
  }
}