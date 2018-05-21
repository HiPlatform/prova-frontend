import React from 'react';
import { shallow } from 'enzyme';
import Label from './index';

describe('Label', () => {
  const props = {
    text: 'some label',
  };
  const component = shallow(<Label {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render the text prop', () => {
    expect(component.text()).toBe(props.text);
  });
});
