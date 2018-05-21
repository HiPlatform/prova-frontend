import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './ButtonGroup.css';

const ButtonGroup = ({ types, change, active }) => (
  <div className="buttonGroup">
    {types.map(type => (
      <Item
        key={type}
        active={active === type}
        type={type}
        change={change}
      />
    ))}
  </div>
);

ButtonGroup.defaultProps = {
  active: '',
};

ButtonGroup.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  change: PropTypes.func.isRequired,
  active: PropTypes.string,
};

export default ButtonGroup;
