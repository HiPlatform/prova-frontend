import React from 'react';

const ButtonGroup = ({ types, change }) => (
  <div>
    {types.map(type => (
      <button
        key={type}
        onClick={() => change(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

export default ButtonGroup;
