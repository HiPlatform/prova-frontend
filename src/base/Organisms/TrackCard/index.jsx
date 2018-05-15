/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';

import Image from '../../Atoms/Image';
import AttributeField from '../../Molecules/AttributeField';

import './TrackCard.css';

const getArtistsName = items =>
  items.map(item => item.name);

const getDuration = (ms) => {
  const date = new Date(1000 * Math.round(ms / 1000));
  return `${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
};

const TrackCard = ({
  name,
  artists,
  album,
  duration_ms,
}) => (
  <div className="trackCard">
    <Image url={pathOr('http://via.placeholder.com/200x100', ['images', '0', 'url'], album)} alt="album" />
    <div className="trackCard__info">
      <div className="trackCard__info__title">
        <AttributeField text={name} />
      </div>
      <div className="trackCard__info__extra">
        <AttributeField label="Artists" text={getArtistsName(artists).join(', ')} />
        <AttributeField label="Album" text={album.name} />
        <AttributeField label="Duration" text={getDuration(duration_ms)} />
      </div>
    </div>
  </div>
);

TrackCard.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })),
  }).isRequired,
  duration_ms: PropTypes.number.isRequired,
};

export default TrackCard;
