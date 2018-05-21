import React from 'react';
import { shallow } from 'enzyme';
import { partial } from 'ramda';

import { FavoriteButton } from './index';
import toggleFavorite from './FavoriteButton.actions';
import FavoriteReducer from './FavoriteButton.reducer';

describe('FavoriteButton', () => {
  const initial = {
    artist: { items: [] },
    album: { items: [] },
    track: { items: [] },
  };
  const fnToggle = jest.fn();
  const props = {
    fnToggle,
  };
  const component = shallow(<FavoriteButton {...props} />);
  const randomAction = { type: 'random' };

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the toggle function when heart is clicked', () => {
    component.find('button').simulate('click');
    expect(fnToggle).toHaveBeenCalled();
  });

  describe('[Actions] FavoriteButton >', () => {
    it('toggleFavorite', () => {
      const item = 'something';
      const list = 'artist';
      const toggleAction = toggleFavorite(list, item);
      const expectedResult = { type: 'fav', item, list };

      expect(toggleAction).toEqual(expectedResult);
    });
  });

  describe('[Reducer] FavoriteButton >', () => {
    const reducer = partial(FavoriteReducer, [initial]);

    it('has default called', () => {
      expect(reducer(randomAction)).toEqual(initial);
    });

    it('puts the item in the favorites array and removes on a second call', () => {
      const item = 'something';
      const list = 'artist';
      const toggleAction = toggleFavorite(list, item);
      const expectedResult = { ...initial, artist: { items: [item] } };

      expect(reducer(toggleAction)).toEqual(expectedResult);
    });

    it('removes the item of the favorites array', () => {
      const item = 'something';
      const list = 'artist';
      const newReducer = partial(FavoriteReducer, [{ ...initial, artist: { items: [item] } }]);
      const toggleAction = toggleFavorite(list, item);

      expect(newReducer(toggleAction)).toEqual(initial);
    });
  });
});
