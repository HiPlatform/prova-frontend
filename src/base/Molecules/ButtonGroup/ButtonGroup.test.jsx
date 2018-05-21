import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './index';
import Item from './Item';

describe('ButtonGroup', () => {
  const change = jest.fn();
  const props = {
    types: ['foo', 'bar', 'fuzz', 'buzz'],
    change,
  };
  const component = shallow(<ButtonGroup {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the change function', () => {
    component.childAt(0).dive().simulate('click');
    expect(change).toHaveBeenCalled();
  });

  it('should render a list of buttons based on types prop', () => {
    const buttons = props.types
      .map(type =>
        shallow(<Item key={type} active={false} type={type} change={props.change} />));

    expect(component.find('.buttonGroup').children().find('Item')).toHaveLength(4);
    expect(component.find('.buttonGroup').childAt(0).html()).toEqual(buttons[0].html());
    expect(component.find('.buttonGroup').childAt(1).html()).toEqual(buttons[1].html());
    expect(component.find('.buttonGroup').childAt(2).html()).toEqual(buttons[2].html());
    expect(component.find('.buttonGroup').childAt(3).html()).toEqual(buttons[3].html());
  });

  it('should set the active class when the prop active is equal the button type', () => {
    const active = 'bar';
    component.setProps({ active });

    expect(component.childAt(0).dive().hasClass('active')).toBe(false);
    expect(component.childAt(1).dive().hasClass('active')).toBe(true);
    expect(component.childAt(2).dive().hasClass('active')).toBe(false);
    expect(component.childAt(3).dive().hasClass('active')).toBe(false);
  });
});
