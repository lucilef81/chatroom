/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';

import reducer from 'src/reducers';
import debug from 'src/middleware/debug';
import auth from 'src/middleware/auth';

// on fait en sorte d'avoir accès au devtool s'il est installé
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      debug,
      auth,
    ),
  ),
);

export default store;
