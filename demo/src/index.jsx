import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import App from './components/App';
import {Landing} from './components/Landing';
import {Results} from './components/Results';

require('./style.css');

const store = createStore(reducer);

const routes = <Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Landing} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
