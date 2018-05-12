import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import Connected, { Home } from './';

describe('Home Page', () => {
  const wrapper = shallow(<Home />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the label prop', () => {
    const label = 'Some tests';
    wrapper.setProps({ label });
    expect(wrapper.find('h1').text()).toBe(label);
  });

  describe('[Connected] Home Page', () => {
    const label = 'some tests';
    const store = createMockStore({ home: { label } });
    const connectedWrapper = shallowWithStore(<Connected />, store);

    it('should get the label from store', () => {
      expect(connectedWrapper.dive().find('h1').text()).toBe(label);
    });
  });
});
