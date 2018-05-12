import { applyMiddleware, createStore } from 'redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { save, load } from 'redux-localstorage-simple';

import reducers from './rootReducer';

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store =
  applyMiddleware(multi, thunk, promise, save())(createStore)(reducers, load(), devTools);

export default store;
