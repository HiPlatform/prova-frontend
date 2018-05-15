export const URLS = {
  SEARCH: 'https://api.spotify.com/v1/search',
};

export const CREDENTIALS = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const HOMEPAGE_ACTIONS = {
  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_TYPE: 'SEARCH_TYPE',
  SEARCH_CHANGE: 'SEARCH_CHANGE',
  SEARCH_DETAILS: 'SEARCH_DETAILS',
  NAVIGATE: 'NAVIGATE',
};
