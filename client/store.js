import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

//import the root reducer
import reducers from './reducers';

import comments from './data/comments';
import posts from './data/posts';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

//create an object 
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(
  reducers,
  defaultState,
  enhancers,
  applyMiddleware(middleware)
)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
export default store;