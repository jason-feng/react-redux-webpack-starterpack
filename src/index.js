import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import './style.scss';

import About from './components/about';
import Nav from './components/nav';
import FallBack from './components/fallback';
import Test from './components/test';
import Welcome from './components/welcome';

const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

// replace your ReactDOM render with the following
// note this uses the Router stuff from SA5
const App = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));

ReactDOM.render(<App />, document.getElementById('main'));
