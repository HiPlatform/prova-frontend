import { URLS, HOMEPAGE_ACTIONS } from '../../../consts';
import fetch from '../../../helpers/fetchData';

export const searchData =
  (type, text) =>
    dispatch =>
      fetch(
        `${URLS.SEARCH}/${type}/${text}`,
        HOMEPAGE_ACTIONS.SEARCH_DATA,
        'data',
        dispatch,
      );

export const getDetails =
  url =>
    dispatch =>
      fetch(
        url,
        HOMEPAGE_ACTIONS.SEARCH_DETAILS,
        'details',
        dispatch,
      );

export const changeType = searchType =>
  ({ type: HOMEPAGE_ACTIONS.SEARCH_TYPE, searchType });

export const changeInput = ({ target: { value } }) =>
  ({ type: HOMEPAGE_ACTIONS.SEARCH_CHANGE, value });

export const changePage = page =>
  ({ type: HOMEPAGE_ACTIONS.NAVIGATE, page });
