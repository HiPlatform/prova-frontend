import React from 'react';
import { shallow } from 'enzyme';
import HomeForm from './index';

describe('HomeForm', () => {
  const fnType = jest.fn();
  const fnInput = jest.fn();
  const fnSearch = jest.fn();
  const props = {
    fnType,
    fnInput,
    fnSearch,
  };
  const component = shallow(<HomeForm {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the search function when the user clicks on the button', () => {
    component.find('Button').simulate('click');
    expect(fnSearch).toHaveBeenCalled();
  });
});
