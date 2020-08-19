import React from 'react';

import './App.scss';
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer";

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Home/>
        <div className="footer"><Footer/></div>
      </div>
    )
  }
}

export default App;