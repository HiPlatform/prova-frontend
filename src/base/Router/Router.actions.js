import { ROUTER_ACTIONS } from '../../consts';

const changePage = page =>
  ({ type: ROUTER_ACTIONS.NAVIGATE, page });

export default changePage;
