/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { checkArtists, checkAvailable, imageUrl } from '../../../helpers/cardsFunctions';

import Button from '../../Atoms/Button';
import Image from '../../Atoms/Image';
import AttributeField from '../../Molecules/AttributeField';

import './AlbumCard.css';

const AlbumCard = ({
  name,
  artists,
  images,
  available_markets,
  href,
  details,
}) => (
  <div className="albumCard">
    <Image url={imageUrl(images)} alt="album" />
    <div className="albumCard__info">
      <div className="albumCard__info__title">
        <AttributeField text={name} />
      </div>
      <div className="albumCard__info__extra">
        <AttributeField label="Artist" text={checkArtists(artists)} />
        <AttributeField label="Market Availability" text={checkAvailable('BR', available_markets)} />
      </div>
      <div className="albumCard__info__actions">
        <Button onClick={() => details(`${href}/tracks`)}>MORE DETAILS</Button>
      </div>
    </div>
  </div>
);

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  available_markets: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string.isRequired,
  details: PropTypes.func.isRequired,
};

export default AlbumCard;
