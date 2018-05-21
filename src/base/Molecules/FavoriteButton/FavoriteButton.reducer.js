import { cond, propEq, T } from 'ramda';

const toggleFavorite = state => ({ list, item }) => {
  const newItem = state[list].items.indexOf(item) === -1;
  return newItem
    ? ({ ...state, [list]: { items: [...state[list].items, item] } })
    : ({ ...state, [list]: { items: state[list].items.filter(i => i !== item) } });
};

const reducer = state => cond([
  [propEq('type', 'fav'), toggleFavorite(state)],
  [T, () => state],
]);

const initial = {
  artist: { items: [] },
  album: { items: [] },
  track: { items: [] },
};

export default (state = initial, action) => reducer(state)(action);
