import { T, cond, propEq, pathOr } from 'ramda';

import { HOMEPAGE_ACTIONS, HOME_INITIALSTATE } from '../../../consts';

const getData = state => ({ data }) => {
  const items = pathOr([], [`${state.searchType}s`, 'items'], data);
  return { ...state, items };
};

const reducer = state => cond([
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_DATA), getData(state)],
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_TYPE), ({ searchType }) => ({ ...state, searchType })],
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_CHANGE), ({ value }) => ({ ...state, value })],
  [T, () => state],
]);

export default (state = HOME_INITIALSTATE, action) => reducer(state)(action);
