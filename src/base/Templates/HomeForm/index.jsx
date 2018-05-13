import React from 'react';

import ButtonGroup from '../../Molecules/ButtonGroup';

const HomeForm = ({ value, searchType, fnType, fnInput, fnSearch }) => (
  <div>
    <ButtonGroup types={['artist', 'album', 'track']} change={fnType} />
    <input type="text" defaultValue={value} onChange={fnInput} />
    <button onClick={() => fnSearch(searchType, value)}>Search</button>
  </div>
);

export default HomeForm;
