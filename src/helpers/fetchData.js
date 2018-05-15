import fetch from 'isomorphic-unfetch';

import { checkStatus } from './errorHandling';

export default (url, type, field, dispatch, options = {}) =>
  fetch(url, options)
    .then(checkStatus)
    .then(response => response.json())
    .then(data => dispatch({ type, [field]: data }));
