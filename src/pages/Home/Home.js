import React from 'react';

import Header from './Header/Header';
import Results from '../../components/Results/Results';
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export default class Home extends React.Component {
  render() {
    return <>
      <ErrorBoundary>
        <Header/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Results/>
      </ErrorBoundary>
    </>
  }
}