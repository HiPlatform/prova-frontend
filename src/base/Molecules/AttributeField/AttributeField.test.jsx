import React from 'react';
import { shallow } from 'enzyme';
import AttributeField from './index';
import Label from '../../Atoms/Label';
import Attribute from '../../Atoms/Attribute';

describe('AttributeField', () => {
  const component = shallow(<AttributeField />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should not have an label if the label prop was not set', () => {
    expect(component.find('.attributeField').children()).toHaveLength(1);
  });

  it('should render a label element if the label prop was set', () => {
    const label = 'some label';
    const labelElement = <Label text={label} />;
    component.setProps({ label });

    expect(component.contains(labelElement)).toBe(true);
  });

  it('should render the attribute element text when set', () => {
    const text = 'some attribute';
    const attributeElement = <Attribute text={text} />;
    component.setProps({ text });

    expect(component.contains(attributeElement)).toBe(true);
  });
});
