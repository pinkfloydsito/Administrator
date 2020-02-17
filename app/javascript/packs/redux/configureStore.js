import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';
import axios from 'axios';
import createRootReducer from './modules/reducers';
import { baseURL } from '../api/rest-api';


export const history = createBrowserHistory();
const enhancers = [];

const URL = baseURL;

const client = axios.create({ // all axios can be used, shown in axios documentation
  baseURL: URL,
  responseType: 'json'
});

const DEVELOPMENT = process.env.NODE_ENV === 'development';

if (DEVELOPMENT) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history),
    //  DEVELOPMENT && logger,
    thunk),
  ...enhancers
);

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composedEnhancers
  );

  return store;
}
