import { T, cond, propEq, pathOr } from 'ramda';

import { HOMEPAGE_ACTIONS } from '../../../consts';

const initialState = {
  label: 'Hello, World',
  items: [],
  searchType: 'artist',
  value: '',
};

const getData = state => ({ data }) => {
  const items = pathOr([], [`${state.searchType}s`, 'items'], data);
  return { ...state, items };
};

const reducer = state => cond([
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_DATA), getData(state)],
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_TYPE), ({ searchType }) => ({ ...state, searchType })],
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_CHANGE), ({ value }) => ({ ...state, value })],
  [propEq('type', HOMEPAGE_ACTIONS.SEARCH_DETAILS), ({ details }) => ({ ...state, details })],
  [T, () => state],
]);

export default (state = initialState, action) => reducer(state)(action);
