import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Atoms/Button';
import Input from '../../Atoms/Input';
import ButtonGroup from '../../Molecules/ButtonGroup';

import './HomeForm.css';

const HomeForm = ({
  value,
  searchType,
  fnType,
  fnInput,
  fnSearch,
}) => (
  <div>
    <h1 className="logo">Music Tracker</h1>
    <div className="homeForm">
      <ButtonGroup types={['artist', 'album', 'track']} change={fnType} active={searchType} />
      <Input type="text" value={value} onChange={fnInput} />
      <Button onClick={() => fnSearch(searchType, value)} modifier="solid">SEARCH</Button>
    </div>
  </div>
);

HomeForm.defaultProps = {
  value: '',
  searchType: '',
};

HomeForm.propTypes = {
  value: PropTypes.string,
  searchType: PropTypes.string,
  fnType: PropTypes.func.isRequired,
  fnInput: PropTypes.func.isRequired,
  fnSearch: PropTypes.func.isRequired,
};

export default HomeForm;
