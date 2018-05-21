import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import configureMockStore from 'redux-mock-store';
import { partial } from 'ramda';

import Connected, { Router } from './';
import changePage from './Router.actions';
import { HOMEPAGE_ACTIONS, ROUTER_ACTIONS, ROUTER_INITIALSTATE } from '../../consts';
import RouterReducer from './Router.reducer';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Router >', () => {
  const wrapper = shallow(<Router />);
  const store = mockStore({ router: ROUTER_INITIALSTATE });
  const connectedWrapper = shallowWithStore(<Connected />, store);
  const randomAction = { type: 'random' };

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the SearchPage', () => {
    wrapper.setProps({ route: 'search' });
  });

  it('should render nothing', () => {
    wrapper.setProps({ route: '404' });
  });

  describe('[Connected] Router >', () => {
    it('have the prop route equals router reducer page', () => {
      expect(connectedWrapper.props().route).toBe(ROUTER_INITIALSTATE.page);
    });
  });

  describe('[Actions] Router >', () => {
    it('have to change the page when called', () => {
      const page = '404';
      const pageAction = changePage(page);
      const expectedResult = { type: ROUTER_ACTIONS.NAVIGATE, page };

      expect(pageAction).toEqual(expectedResult);
    });
  });

  describe('[Reducer] Router >', () => {
    const reducer = partial(RouterReducer, [ROUTER_INITIALSTATE]);

    it('has default called', () => {
      expect(reducer(randomAction)).toEqual(ROUTER_INITIALSTATE);
    });

    it('sets { page: "404" } when called with change action and "404" as value', () => {
      const page = '404';
      const pageAction = changePage(page);
      const expectedResult = { ...ROUTER_INITIALSTATE, page };

      expect(reducer(pageAction)).toEqual(expectedResult);
    });

    it('sets { page: "search" } when called with search action from home', () => {
      const searchAction = { type: HOMEPAGE_ACTIONS.SEARCH_DATA, data: {} };
      const expectedResult = { ...ROUTER_INITIALSTATE, page: 'search' };

      expect(reducer(searchAction)).toEqual(expectedResult);
    });
  });
});
