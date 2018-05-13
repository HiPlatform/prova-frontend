/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { cond, gte, partialRight, pathOr, T } from 'ramda';

import Button from '../../Atoms/Button';
import Image from '../../Atoms/Image';
import AttributeField from '../../Molecules/AttributeField';

import './ArtistCard.css';

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

const ArtistCard = ({
  name,
  popularity,
  images,
  genres,
  href,
  details,
}) => (
  <div className="artistCard">
    <Image url={pathOr('http://via.placeholder.com/200x100', ['0', 'url'], images)} alt="album" />
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
};

export default ArtistCard;
