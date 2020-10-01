import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import './App.scss';
import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound/NotFound";
import Details from "./pages/Details/Details";

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/search" exact><Redirect to="/" /></Route>
            <Route path="/search/:value" component={Home}/>
            <Route path="/film/:id" component={Details}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;