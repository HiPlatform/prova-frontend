import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './index';

describe('Topbar', () => {
  const navigate = jest.fn();
  const props = {
    navigate,
  };
  const component = shallow(<Topbar {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the navigate function when the "back" button is clicked', () => {
    component.find('.topbar__back > button').simulate('click');
    expect(navigate).toHaveBeenCalled();
  });
});
