import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import HomePage from './base/Pages/Home';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
