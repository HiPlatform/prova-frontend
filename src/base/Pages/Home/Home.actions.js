import fetch from 'isomorphic-unfetch';

import { URLS, CREDENTIALS, HOMEPAGE_ACTIONS } from '../../../consts';

export const searchData = (type, text) =>
  dispatch =>
    fetch(`${URLS.SEARCH}?type=${type}&q=${text}`, CREDENTIALS)
      .then(response => response.json())
      .then(data => dispatch({ type: HOMEPAGE_ACTIONS.SEARCH_DATA, data }));

export const getDetails = url =>
  dispatch =>
    fetch(url, CREDENTIALS)
      .then(response => response.json())
      .then(details => dispatch({ type: HOMEPAGE_ACTIONS.SEARCH_DETAILS, details }));

export const changeType = searchType =>
  ({ type: HOMEPAGE_ACTIONS.SEARCH_TYPE, searchType });

export const changeInput = ({ target: { value } }) =>
  ({ type: HOMEPAGE_ACTIONS.SEARCH_CHANGE, value });
