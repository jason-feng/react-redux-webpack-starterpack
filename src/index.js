import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';

import './style.scss';

import About from './components/about';
import Nav from './components/nav';
import FallBack from './components/fallback';
import Test from './components/test';
import Welcome from './components/welcome';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
// this creates the store with the reducers, and does some other stuff to initialize devtools
// const store = createStore(reducers, {}, compose(
//   applyMiddleware(middleware),
//   window.devToolsExtension ? window.devToolsExtension() : f => f,
// ));

const store = createStore(
  reducers, {},
  applyMiddleware(middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);


const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
