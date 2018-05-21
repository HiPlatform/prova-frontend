import React from 'react';
import { shallow } from 'enzyme';
import TrackCard from './index';
import { DEFAULT_TEXTS } from '../../../consts';

describe('TrackCard', () => {
  const props = {
    name: 'Some Track',
    artists: [{ name: 'Artist #1' }, { name: 'Artist #2' }],
    album: {
      name: 'Some album',
      images: [{ url: 'https://some.image/url' }]
    },
    duration_ms: 75 * 1000,
  };
  const component = shallow(<TrackCard {...props} />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should put the first image url in card header', () => {
    expect(component.find('Image').dive().prop('src')).toBe(props.album.images[0].url);
  });

  it('should render the album name given in the props', () => {
    const albumElement = component.find('.trackCard__info__extra')
      .find({ label: 'Album Name' })
      .render()
      .find('p');

    expect(albumElement.text()).toBe(props.album.name);
  });

  it('should render the duration in "minutes:seconds" based in the miliseconds length of the track', () => {
    const durationElement = component.find('.trackCard__info__extra')
      .find({ label: 'Duration' })
      .render()
      .find('p');

    expect(durationElement.text()).toBe('1:15');
  });

  it('should put a mock image url in card header if prop images has no images at all', () => {
    const album = {
      images: [],
    };
    component.setProps({ album });

    expect(component.find('Image').dive().prop('src')).toBe(DEFAULT_TEXTS.IMAGE);
  });

  it('should render the track name given in the props', () => {
    expect(component.find('.trackCard__info__title').render().text()).toBe(props.name);
  });

  it('should render all artists names', () => {
    const artistsElement = component.find('.trackCard__info__extra')
      .find({ label: 'Artists' })
      .render()
      .find('p');
    const names = props.artists.map(item => item.name);

    expect(artistsElement.text()).toBe(names.join(', '));
  });

  it('should render nothing when the artists prop is an empty array', () => {
    const artists = [];
    component.setProps({ artists });
    const artistsElement = component.find('.trackCard__info__extra')
      .find({ label: 'Artists' })
      .render()
      .find('p');

    expect(artistsElement.text()).toBe('');
  });
});
