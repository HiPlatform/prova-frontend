const BASE_URL = 'https://spotify-access.herokuapp.com';

export const URLS = {
  SEARCH: `${BASE_URL}/data`,
  DETAILS: `${BASE_URL}/details`,
};

export const HOMEPAGE_ACTIONS = {
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_TYPE: 'SEARCH_TYPE',
  SEARCH_CHANGE: 'SEARCH_CHANGE',
};

export const SEARCH_ACTIONS = {
  SEARCH_DETAILS: 'SEARCH_DETAILS',
};

export const ROUTER_ACTIONS = {
  NAVIGATE: 'NAVIGATE',
};

export const DEFAULT_TEXTS = {
  ARTISTS: 'Various artists',
  COUNTRY_AVAILABLE: 'Available in your country',
  COUNTRY_UNAVAILABLE: 'Unavailable in your country',
  IMAGE: 'http://via.placeholder.com/200x100',
};

export const POPULARITY_RANGES = [
  { value: 80, label: 'Hot' },
  { value: 60, label: 'Cool' },
  { value: 30, label: 'Regular' },
  { value: 'D', label: 'Underground' },
];

export const HOME_INITIALSTATE = {
  items: [],
  searchType: 'artist',
  value: '',
};

export const SEARCH_INITIALSTATE = {
  details: [],
};

export const ROUTER_INITIALSTATE = {
  page: 'home',
};
