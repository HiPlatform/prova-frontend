import React from 'react';
import PropTypes from 'prop-types';

import { checkPopularity, imageUrl } from '../../../helpers/cardsFunctions';

import Button from '../../Atoms/Button';
import Image from '../../Atoms/Image';
import AttributeField from '../../Molecules/AttributeField';

import './ArtistCard.css';
import FavoriteButton from '../../Molecules/FavoriteButton';

const ArtistCard = ({
  name,
  popularity,
  images,
  genres,
  href,
  details,
  item,
}) => (
  <div className="artistCard">
    <FavoriteButton item={item} list="artist" />
    <Image url={imageUrl(images)} alt="album" />
    <div className="artistCard__info">
      <div className="artistCard__info__title">
        <AttributeField text={name} />
      </div>
      <div className="artistCard__info__extra">
        <AttributeField label="Genres" text={genres.join(', ')} />
        <AttributeField label="Popularity" text={checkPopularity(popularity)} />
      </div>
      <div className="artistCard__info__actions">
        <Button onClick={() => details(`${href}/albums?limit=5`)}>MORE DETAILS</Button>
      </div>
    </div>
  </div>
);

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string.isRequired,
  details: PropTypes.func.isRequired,
  item: PropTypes.shape().isRequired,
};

export default ArtistCard;
