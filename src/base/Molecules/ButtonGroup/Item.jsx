import React from 'react';
import PropTypes from 'prop-types';

import './ButtonGroup.css';

const Item = ({ active, type, change }) => (
  <button
    className={`buttonGroup__button ${active ? 'active' : ''}`}
    onClick={() => change(type)}
  >
    {type}
  </button>
);

Item.propTypes = {
  type: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Item;
