import React from 'react';
import { cond, propEq, T } from 'ramda';

import ArtistCard from '../../Organisms/ArtistCard';
import AlbumCard from '../../Organisms/AlbumCard';
import TrackCard from '../../Organisms/TrackCard';

const TypeSelector = cond([
  [propEq('type', 'artist'), props => <ArtistCard {...props} />],
  [propEq('type', 'album'), props => <AlbumCard {...props} />],
  [propEq('type', 'track'), props => <TrackCard {...props} />],
  [T, () => null],
]);

export default TypeSelector;
