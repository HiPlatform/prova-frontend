import { URLS, CREDENTIALS, HOMEPAGE_ACTIONS } from '../../../consts';
import fetch from '../../../helpers/fetchData';

const getToken = () => 'BQAo_6zpvAijZqxy6QEGNF8wlrwvTyCY93DdoxcllmUNdFmQ-CdQaGv-cR3rjbXflv7uM_-ELZDwyJxrcIg';

export const searchData =
  (type, text) =>
    dispatch =>
      fetch(
        `${URLS.SEARCH}?type=${type}&q=${text}`,
        HOMEPAGE_ACTIONS.SEARCH_DATA,
        'data',
        dispatch,
        CREDENTIALS(getToken()),
      );

export const getDetails =
  url =>
    dispatch =>
      fetch(
        url,
        HOMEPAGE_ACTIONS.SEARCH_DETAILS,
        'details',
        dispatch,
        CREDENTIALS(getToken()),
      );

export const changeType = searchType =>
  ({ type: HOMEPAGE_ACTIONS.SEARCH_TYPE, searchType });

export const changeInput = ({ target: { value } }) =>
  ({ type: HOMEPAGE_ACTIONS.SEARCH_CHANGE, value });

export const changePage = page =>
  ({ type: HOMEPAGE_ACTIONS.NAVIGATE, page });
