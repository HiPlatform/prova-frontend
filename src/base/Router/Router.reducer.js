import { cond, propEq, T } from 'ramda';
import { ROUTER_INITIALSTATE, ROUTER_ACTIONS, HOMEPAGE_ACTIONS } from '../../consts';

const reducer = state => cond([
  [propEq('type', ROUTER_ACTIONS.NAVIGATE), ({ page }) => ({ ...state, page })],
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_DATA), () => ({ ...state, page: 'search' })],
  [T, () => state],
]);

export default (state = ROUTER_INITIALSTATE, action) => reducer(state)(action);
