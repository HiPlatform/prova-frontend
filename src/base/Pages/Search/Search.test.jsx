import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { partial } from 'ramda';

import Connected, { Search } from './index';
import getDetails from './Search.actions';
import { SEARCH_ACTIONS, SEARCH_INITIALSTATE, HOME_INITIALSTATE } from '../../../consts';
import SearchReducer from './Search.reducer';
import artistsMock from '../../../mock/artistsMock';
import albumMock from '../../../mock/albumMock';
import trackMock from '../../../mock/trackMock.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Search >', () => {
  const wrapper = shallow(<Search />);
  const home = {
    ...HOME_INITIALSTATE,
    items: artistsMock.artists.items,
  };
  const store = mockStore({ search: SEARCH_INITIALSTATE, home });
  const connectedWrapper = shallowWithStore(<Connected />, store);
  const randomAction = { type: 'random' };
  const detailsAction = getDetails('https://some.redirect/url');

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('[Connected] Search >', () => {
    it('should render a list with artists cards', () => {
      const cards = connectedWrapper.render().find('.searchPage__content').children();
      expect(cards).toHaveLength(2);
    });

    it('should render a list with album cards', () => {
      const newHome = {
        ...HOME_INITIALSTATE,
        items: albumMock.albums.items,
      };
      const newStore = mockStore({ search: SEARCH_INITIALSTATE, home: newHome });
      const albumWrapper = shallowWithStore(<Connected />, newStore);

      const cards = albumWrapper.render().find('.searchPage__content').children();
      expect(cards).toHaveLength(1);
    });

    it('should render a list with track cards', () => {
      const newHome = {
        ...HOME_INITIALSTATE,
        items: trackMock.tracks.items,
      };
      const newStore = mockStore({ search: SEARCH_INITIALSTATE, home: newHome });
      const trackWrapper = shallowWithStore(<Connected />, newStore);

      const cards = trackWrapper.render().find('.searchPage__content').children();
      expect(cards).toHaveLength(20);
    });

    it('should render not render a list', () => {
      const newHome = {
        ...HOME_INITIALSTATE,
        items: [
          { type: 'mock' },
        ],
      };
      const newStore = mockStore({ search: SEARCH_INITIALSTATE, home: newHome });
      const mockWrapper = shallowWithStore(<Connected />, newStore);

      const cards = mockWrapper.render().find('.searchPage__content').children();
      expect(cards).toHaveLength(0);
    });
  });

  describe('[Actions] SearchPage >', () => {
    describe('getDetails >', () => {
      beforeEach(() => {
        store.clearActions();
        fetch.resetMocks();
        fetch.mockResponse(JSON.stringify({ foo: 'bar' }));
      });

      it('should call the api and get the details', () => {
        const expectedResult = [{ type: SEARCH_ACTIONS.SEARCH_DETAILS, details: { foo: 'bar' } }];

        return store.dispatch(detailsAction).then(() => {
          expect(store.getActions()).toEqual(expectedResult);
        });
      });
    });
  });

  describe('[Reducer] SearchPage >', () => {
    const reducer = partial(SearchReducer, [SEARCH_INITIALSTATE]);

    it('has default called', () => {
      expect(reducer(randomAction)).toEqual(SEARCH_INITIALSTATE);
    });

    it('gets the details of the clicked card', () => {
      const details = { type: SEARCH_ACTIONS.SEARCH_DETAILS, details: { foo: 'bar' } };
      const expectedResult = { ...SEARCH_INITIALSTATE, details: { foo: 'bar' } };

      expect(reducer(details)).toEqual(expectedResult);
    });
  });
});
