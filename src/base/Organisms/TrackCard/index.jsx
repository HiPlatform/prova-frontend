/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { imageUrl, getArtistsName, getDuration } from '../../../helpers/cardsFunctions';

import Image from '../../Atoms/Image';
import AttributeField from '../../Molecules/AttributeField';
import FavoriteButton from '../../Molecules/FavoriteButton';

import './TrackCard.css';

const TrackCard = ({
  name,
  artists,
  album,
  duration_ms,
  item,
}) => (
  <div className="trackCard">
    <FavoriteButton item={item} list="album" />
    <Image url={imageUrl(album, ['images'])} alt="album" />
    <div className="trackCard__info">
      <div className="trackCard__info__title">
        <AttributeField text={name} />
      </div>
      <div className="trackCard__info__extra">
        <AttributeField label="Artists" text={getArtistsName(artists).join(', ')} />
        <AttributeField label="Album Name" text={album.name} />
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
  item: PropTypes.shape().isRequired,
};

export default TrackCard;
