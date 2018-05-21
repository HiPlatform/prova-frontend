import React from 'react';
import { shallow } from 'enzyme';
import Attribute from './index';

describe('Attribute', () => {
  const component = shallow(<Attribute />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render the text prop', () => {
    component.setProps({ text: 'foo' });
    expect(component.text()).toBe('foo');
  });
});
