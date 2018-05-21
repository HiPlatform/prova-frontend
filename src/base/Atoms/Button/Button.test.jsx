import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  const onClick = jest.fn();
  const props = {
    children: 'CLICK ME',
    onClick,
  };

  const component = shallow(<Button {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onClick function', () => {
    component.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should have the child prop rendered', () => {
    const childrenText = component.children()
      .reduce((text, child) => `${text}${child.text().replace('<e />', '')}`, '');
    expect(childrenText).toBe(props.children);
  });

  it('should render the modifier class', () => {
    const modifier = 'inverted';
    component.setProps({ modifier });
    expect(component.hasClass(modifier)).toBe(true);
  });
});
