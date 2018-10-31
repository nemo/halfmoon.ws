import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Route, Router, Redirect, Switch } from 'react-router-dom'
import './index.css';

import Page from './Components/Page'

// Pages
import Home from './Pages/Index';
import Principles from './Pages/Principles'

const history = createBrowserHistory()
ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Page exact path='/' component={Home} />
      <Page exact path='/principles' component={Principles} />
    </Switch>
  </Router>
), document.getElementById('root'));

// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
