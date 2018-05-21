import React from 'react';
import { shallow } from 'enzyme';
import Image from './index';

describe('Image', () => {
  const props = {
    url: 'http://image.url/given',
    alt: 'some pic',
  };
  const component = shallow(<Image {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the img and alt props rendered', () => {
    expect(component.prop('src')).toBe(props.url);
    expect(component.prop('alt')).toBe(props.alt);
    expect(component.html()).toBe(`<img src="${props.url}" alt="${props.alt}"/>`);
  });
});
