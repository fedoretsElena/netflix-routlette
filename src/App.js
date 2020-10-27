import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { hot } from 'react-hot-loader';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';

import './styles/index.scss';
import './App.scss';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';

const App = ({ Router, location, context, store }) => {
  
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Router location={location} context={context}>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/search' exact><Redirect to='/' /></Route>
            <Route path='/search/:value' component={Home} exact/>
            <Route path='/film/:id' component={Details} exact/>
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

App.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(App);