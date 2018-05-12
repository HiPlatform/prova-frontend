import React from 'react';
import { shallow } from 'enzyme';
import Home from './';

describe('Home Page', () => {
  const wrapper = shallow(<Home />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
