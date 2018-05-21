import fetch from '../../../helpers/fetchData';
import { SEARCH_ACTIONS, URLS } from '../../../consts';

const getDetails =
  url =>
    dispatch =>
      fetch(
        `${URLS.DETAILS}/${btoa(url)}`,
        SEARCH_ACTIONS.SEARCH_DETAILS,
        'details',
        dispatch,
      );

export default getDetails;
