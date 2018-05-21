import fetch from '../../../helpers/fetchData';
import { SEARCH_ACTIONS } from '../../../consts';

const getDetails =
  url =>
    dispatch =>
      fetch(
        url,
        SEARCH_ACTIONS.SEARCH_DETAILS,
        'details',
        dispatch,
      );

export default getDetails;
