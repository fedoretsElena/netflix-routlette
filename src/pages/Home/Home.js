import React from 'react';

import Header from './Header/Header';
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export default class Home extends React.Component {
  render() {
    return <>
      <ErrorBoundary>
        <Header/>
      </ErrorBoundary>
    </>
  }
}