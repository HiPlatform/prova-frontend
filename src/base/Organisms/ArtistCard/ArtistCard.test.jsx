import React from 'react';
import { shallow } from 'enzyme';
import ArtistCard from './index';
import { DEFAULT_TEXTS, POPULARITY_RANGES } from '../../../consts';

describe('ArtistCard', () => {
  const details = jest.fn();
  const props = {
    name: 'John Due',
    popularity: 90,
    images: [{ url: 'https://some.image/url' }],
    genres: ['foo', 'bar', 'fuzz'],
    href: 'https://some.redirect/url',
    details,
  };
  const component = shallow(<ArtistCard {...props} />);

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

  it('should render the artist name given in the props', () => {
    expect(component.find('.artistCard__info__title').render().text()).toBe(props.name);
  });

  it('should render all the genres', () => {
    const genreElement = component.find('.artistCard__info__extra')
      .find({ label: 'Genres' })
      .render()
      .find('p');
    expect(genreElement.text()).toBe(props.genres.join(', '));
  });

  it('should render nothing when the genres prop is an empty array', () => {
    const genres = [];
    component.setProps({ genres });
    const genreElement = component.find('.artistCard__info__extra')
      .find({ label: 'Genres' })
      .render()
      .find('p');

    expect(genreElement.text()).toBe('');
  });

  it('should render "Hot" when the popularity rate is above 80', () => {
    const popularityElement = component.find('.artistCard__info__extra')
      .find({ label: 'Popularity' })
      .render()
      .find('p');
    expect(popularityElement.text()).toBe(POPULARITY_RANGES[0].label);
  });

  it('should render "Cool" when the popularity rate is above 60', () => {
    const popularity = 70;
    component.setProps({ popularity });
    const popularityElement = component.find('.artistCard__info__extra')
      .find({ label: 'Popularity' })
      .render()
      .find('p');

    expect(popularityElement.text()).toBe(POPULARITY_RANGES[1].label);
  });

  it('should render "Regular" when the popularity rate is above 30', () => {
    const popularity = 45;
    component.setProps({ popularity });
    const popularityElement = component.find('.artistCard__info__extra')
      .find({ label: 'Popularity' })
      .render()
      .find('p');

    expect(popularityElement.text()).toBe(POPULARITY_RANGES[2].label);
  });

  it('should render "Underground" when the popularity is under 30', () => {
    const popularity = 15;
    component.setProps({ popularity });
    const popularityElement = component.find('.artistCard__info__extra')
      .find({ label: 'Popularity' })
      .render()
      .find('p');

    expect(popularityElement.text()).toBe(POPULARITY_RANGES[3].label);
  });
});
