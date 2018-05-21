import { cond, propEq, T } from 'ramda';

import { SEARCH_INITIALSTATE, SEARCH_ACTIONS } from '../../../consts';

const reducer = state => cond([
  [propEq('type', SEARCH_ACTIONS.SEARCH_DETAILS), ({ details }) => ({ ...state, details })],
  [T, () => state],
]);

export default (state = SEARCH_INITIALSTATE, action) => reducer(state)(action);
