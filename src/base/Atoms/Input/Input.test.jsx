import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('Component', () => {
  const onChange = jest.fn();
  const props = {
    type: 'text',
    onChange,
  };
  const component = shallow(<Input {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onChange function when user enters some inputs', () => {
    component.simulate('change');
    expect(onChange).toHaveBeenCalled();
  });

  it('should mount the input with the props received', () => {
    const value = 'some value';
    component.setProps({ value });
    expect(component.prop('defaultValue')).toBe(value);
    expect(component.prop('type')).toBe(props.type);
  });
});
