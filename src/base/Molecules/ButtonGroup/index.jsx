import React from 'react';

import './ButtonGroup.css';

const ButtonGroup = ({ types, change, active }) => (
  <div className="buttonGroup">
    {types.map(type => (
      <button
        className={`buttonGroup__button ${active === type ? 'active' : ''}`}
        key={type}
        onClick={() => change(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

export default ButtonGroup;
