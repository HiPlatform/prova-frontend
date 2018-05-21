import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { partial } from 'ramda';

import Connected, { Home } from './';
import { searchData, changeType, changeInput } from './Home.actions';
import HomeReducer from './Home.reducer';
import { HOME_INITIALSTATE, HOMEPAGE_ACTIONS } from '../../../consts';
import artistsMock from '../../../mock/artistsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('HomePage >', () => {
  const wrapper = shallow(<Home />);
  const store = mockStore({ home: HOME_INITIALSTATE });
  const connectedWrapper = shallowWithStore(<Connected />, store);
  const event = { target: { value: 'some input' } };
  const { searchType } = connectedWrapper.props();
  const typeAction = changeType(searchType);
  const inputAction = changeInput(event);
  const searchAction = searchData(searchType, 'mock');
  const randomAction = { type: 'random' };

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('[Connected] HomePage >', () => {
    beforeEach(() => {
      store.clearActions();
    });

    it('should the prop searchType value be equal "artist"', () => {
      expect(connectedWrapper.props().searchType).toBe(HOME_INITIALSTATE.searchType);
    });

    it('dispatch action when user clicks in one of the buttons of the GroupButtons', () => {
      const value = 'tracks';
      const expectedResult = changeType(value);

      connectedWrapper.props().fnType(value);
      expect(store.getActions()).toEqual([expectedResult]);
    });

    it('dispatch action when user changes the input', () => {
      connectedWrapper.props().fnInput(event);
      expect(store.getActions()).toEqual([inputAction]);
    });
  });

  describe('[Actions] HomePage >', () => {
    describe('searchData >', () => {
      beforeEach(() => {
        store.clearActions();
        fetch.resetMocks();
        fetch.mockResponse(JSON.stringify(artistsMock));
      });

      it('should call the api and get the "searchType" data', () => {
        const expectedResult = [{ type: HOMEPAGE_ACTIONS.SEARCH_DATA, data: artistsMock }];

        return store.dispatch(searchAction).then(() => {
          expect(store.getActions()).toEqual(expectedResult);
        });
      });
    });

    describe('changeType >', () => {
      it('should return the selected searchType', () => {
        const expectedResult = { type: HOMEPAGE_ACTIONS.SEARCH_TYPE, searchType };

        expect(typeAction).toEqual(expectedResult);
      });
    });

    describe('changeInput >', () => {
      it('should return the typed value of the input', () => {
        const expectedResult = { type: HOMEPAGE_ACTIONS.SEARCH_CHANGE, value: 'some input' };

        expect(inputAction).toEqual(expectedResult);
      });
    });
  });

  describe('[Reducer] HomePage >', () => {
    const reducer = partial(HomeReducer, [HOME_INITIALSTATE]);

    it('has default called', () => {
      expect(reducer(randomAction)).toEqual(HOME_INITIALSTATE);
    });

    it('sets { searchType: "track" } when called with type action and "track" as value', () => {
      const modifiedTypeAction = { ...typeAction, searchType: 'track' };
      const expectedResult = { ...HOME_INITIALSTATE, searchType: 'track' };

      expect(reducer(modifiedTypeAction)).toEqual(expectedResult);
    });

    it('sets { value: "mock" } when called with input action and "mock" as value', () => {
      const modifiedInputAction = { ...inputAction, value: 'mock' };
      const expectedResult = { ...HOME_INITIALSTATE, value: 'mock' };

      expect(reducer(modifiedInputAction)).toEqual(expectedResult);
    });

    it('sets items based on search attributes when called with search action', () => {
      const modifiedSearchAction = { type: HOMEPAGE_ACTIONS.SEARCH_DATA, data: artistsMock };
      const expectedResult = { ...HOME_INITIALSTATE, items: artistsMock.artists.items };

      expect(reducer(modifiedSearchAction)).toEqual(expectedResult);
    });
  });
});
