import React from 'react';
import { cond, propEq, T } from 'ramda';

import HomePage from '../Pages/Home';
import SearchPage from '../Pages/Search';

export default cond([
  [propEq('route', 'home'), () => <HomePage />],
  [propEq('route', 'search'), () => <SearchPage />],
  [T, () => null], // TODO: Make a 404 Not Found page.
]);
