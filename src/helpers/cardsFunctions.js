import { cond, gte, partialRight, pathOr, T } from 'ramda';
import { DEFAULT_TEXTS, POPULARITY_RANGES } from '../consts';

const conditionRange = parameters =>
  cond(parameters.map(parameter => [
    parameter.value === 'D' ? T : partialRight(gte, [parameter.value]),
    () => parameter.label,
  ]));

export const checkArtists = items =>
  (items.length > 1
    ? DEFAULT_TEXTS.ARTISTS
    : pathOr('', ['0', 'name'], items));

export const checkAvailable = (country, markets) =>
  (markets.indexOf(country) === -1
    ? DEFAULT_TEXTS.COUNTRY_UNAVAILABLE
    : DEFAULT_TEXTS.COUNTRY_AVAILABLE);

export const imageUrl = (images, extPath = []) =>
  pathOr(DEFAULT_TEXTS.IMAGE, [...extPath, '0', 'url'], images);

export const checkPopularity = conditionRange(POPULARITY_RANGES);

export const getArtistsName = items =>
  items.map(item => item.name);

export const getDuration = (ms) => {
  const date = new Date(1000 * Math.round(ms / 1000));
  return `${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
};
