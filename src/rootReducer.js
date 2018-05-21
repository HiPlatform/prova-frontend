import { combineReducers } from 'redux';

import router from './base/Router/Router.reducer';
import home from './base/Pages/Home/Home.reducer';
import search from './base/Pages/Search/Search.reducer';
import favorites from './base/Molecules/FavoriteButton/FavoriteButton.reducer';

export default combineReducers({
  router,
  home,
  search,
  favorites,
});
