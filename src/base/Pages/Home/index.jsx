import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cond, pathOr, propEq, T, gte, partialRight } from 'ramda';

import { changeType, changeInput, searchData, getDetails } from './Home.actions';
import './Home.css';

const ButtonGroup = ({ types, change }) => (
  <div>
    {types.map(type => (
      <button
        key={type}
        onClick={() => change(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

const conditionRange = parameters =>
  cond(parameters.map(parameter => [
    parameter.value === 'D' ? T : partialRight(gte, [parameter.value]),
    () => parameter.label,
  ]));

const popularityRanges = [
  { value: 80, label: 'Hot' },
  { value: 60, label: 'Cool' },
  { value: 30, label: 'Regular' },
  { value: 'D', label: 'Underground' },
];

const checkPopularity = conditionRange(popularityRanges);

const ArtistList = ({ name, popularity, genres, images, href, details }) => (
  <div onClick={() => details(`${href}/albums?limit=5`)}>
    <p>{name}</p>
    <p>{popularity} - {checkPopularity(popularity)}</p>
    <p>{genres.join(', ')}</p>
    <img src={pathOr('http://via.placeholder.com/200x100', ['0', 'url'], images)} alt="artist" />
  </div>
);

const checkArtists = items =>
  items.length > 1
    ? 'Various artists'
    : pathOr('', ['0', 'name'], items);

const checkAvailable = (country, markets) =>
  (markets.indexOf(country) === -1
    ? 'Unavailable in your country'
    : 'Available in your country');

const AlbumList = ({ name, artists, images, available_markets, href, details }) => (
  <div onClick={() => details(`${href}/tracks`)}>
    <p>{name}</p>
    <p>{checkArtists(artists)}</p>
    <img src={pathOr('http://via.placeholder.com/200x100', ['0', 'url'], images)} alt="album" />
    <p>{checkAvailable('BR', available_markets)}</p>
  </div>
);

const getArtistsName = items =>
  items.map(item => item.name);

const getDuration = (ms) => {
  const date = new Date(1000 * Math.round(ms / 1000));
  return `${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
};

const TrackList = ({ name, artists, album, duration_ms }) => (
  <div>
    <p>{name}</p>
    <p>{getArtistsName(artists).join(', ')}</p>
    <img src={pathOr('http://via.placeholder.com/200x100', ['images', '0', 'url'], album)} alt="album" />
    <p>{album.name}</p>
    <p>{getDuration(duration_ms)}</p>
  </div>
);

const TypeSelect = cond([
  [propEq('type', 'artist'), props => <ArtistList {...props} />],
  [propEq('type', 'album'), props => <AlbumList {...props} />],
  [propEq('type', 'track'), props => <TrackList {...props} />],
  [T, () => null],
]);

export const Home = ({
  label,
  value,
  searchType,
  items,
  fnType,
  fnInput,
  fnSearch,
  fnDetails,
}) => (
  <div>
    <h1>{label}</h1>
    <ButtonGroup types={['artist', 'album', 'track']} change={fnType} />
    <input type="text" defaultValue={value} onChange={fnInput} />
    <button onClick={() => fnSearch(searchType, value)}>Search</button>
    {items.map(item => (
      <TypeSelect
        key={item.id}
        type={searchType}
        details={fnDetails}
        {...item}
      />
    ))}
  </div>
);

Home.defaultProps = {
  label: '',
};

Home.propTypes = {
  label: PropTypes.string,
};

const mapState2ToProps = state => ({
  label: state.home.label,
  value: state.home.value,
  searchType: state.home.searchType,
  items: state.home.items,
});

const mapDispatch2Props = dispatch =>
  bindActionCreators({
    fnType: changeType,
    fnInput: changeInput,
    fnSearch: searchData,
    fnDetails: getDetails,
  }, dispatch);

export default connect(mapState2ToProps, mapDispatch2Props)(Home);
