import React from 'react';

import Button from '../../Atoms/Button';
import Input from '../../Atoms/Input';
import ButtonGroup from '../../Molecules/ButtonGroup';

import './HomeForm.css';

const HomeForm = ({ value, searchType, fnType, fnInput, fnSearch }) => (
  <div>
    <h1 className="logo">Music Tracker</h1>
    <div className="homeForm">
      <ButtonGroup types={['artist', 'album', 'track']} change={fnType} active={searchType} />
      <Input type="text" value={value} onChange={fnInput} />
      <Button onClick={() => fnSearch(searchType, value)} modifier="solid">SEARCH</Button>
    </div>
  </div>
);

export default HomeForm;
