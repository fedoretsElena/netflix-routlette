import React from 'react';

import './App.scss';
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Results from "./components/Results/Results";
import Details from "./pages/Details/Details";

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        {/*Router will be here*/}
        <ErrorBoundary>
          {/*<Details/>*/}
          <Home/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Results/>
        </ErrorBoundary>
        <div className="footer"><Footer/></div>
      </div>
    )
  }
}

export default App;