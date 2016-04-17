import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';
import request from 'superagent';

import App from './components/App';
import {Landing} from './components/Landing';
import {ResultsContainer} from './components/Results';

require('./style.css');

const store = createStore(reducer);

store.dispatch(setState({results: [{id: '9999', title: 'Testing'}]}));

request.get('http://jsonplaceholder.typicode.com/posts')
  .end(function(err, res){
    store.dispatch(setState({results: res.body}));
  });

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={Landing} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
