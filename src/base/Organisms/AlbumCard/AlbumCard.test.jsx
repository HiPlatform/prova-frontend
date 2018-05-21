import React from 'react';
import { shallow } from 'enzyme';
import AlbumCard from './index';
import { DEFAULT_TEXTS } from '../../../consts';

describe('AlbumCard', () => {
  const details = jest.fn();
  const props = {
    name: 'My Album',
    artists: [{ name: 'Artist #1' }],
    images: [{ url: 'https://some.img/url' }],
    available_markets: ['BR'],
    href: 'https://some.redirect/url',
    details,
  };
  const component = shallow(<AlbumCard {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the details function when the "more details" button is clicked', () => {
    component.find('Button').simulate('click');
    expect(details).toHaveBeenCalled();
  });

  it('should put the first image url in card header', () => {
    expect(component.find('Image').dive().prop('src')).toBe(props.images[0].url);
  });

  it('should put a mock image url in card header if prop images has no images at all', () => {
    const images = [];
    component.setProps({ images });

    expect(component.find('Image').dive().prop('src')).toBe(DEFAULT_TEXTS.IMAGE);
  });

  it('should render the album name given in the props', () => {
    expect(component.find('.albumCard__info__title').render().text()).toBe(props.name);
  });

  it('should render the artist name', () => {
    const artistElement = component.find('.albumCard__info__extra')
      .find({ label: 'Artist' })
      .render()
      .find('p');
    expect(artistElement.text()).toBe(props.artists[0].name);
  });

  it('should render "Various artists" when the the artists prop is greater than 1', () => {
    const artists = [
      { name: 'Artist #1' },
      { name: 'Artist #2' },
    ];
    component.setProps({ artists });
    const artistElement = component.find('.albumCard__info__extra')
      .find({ label: 'Artist' })
      .render()
      .find('p');

    expect(artistElement.text()).toBe(DEFAULT_TEXTS.ARTISTS);
  });

  it('should render "Available in your country" when "BR" value is present in available_markets prop', () => {
    const marketElement = component.find('.albumCard__info__extra')
      .find({ label: 'Market Availability' })
      .render()
      .find('p');
    expect(marketElement.text()).toBe(DEFAULT_TEXTS.COUNTRY_AVAILABLE);
  });

  it('should render "Unavailable in your country" when "BR" value isn\'t present in available_markets prop', () => {
    const markets = [
      'EU', 'US', 'CA',
    ];
    component.setProps({ available_markets: markets });
    const marketElement = component.find('.albumCard__info__extra')
      .find({ label: 'Market Availability' })
      .render()
      .find('p');

    expect(marketElement.text()).toBe(DEFAULT_TEXTS.COUNTRY_UNAVAILABLE);
  });
});
