import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './base/Pages/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
