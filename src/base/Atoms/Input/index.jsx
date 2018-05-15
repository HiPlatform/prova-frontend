import React from 'react';

import './Input.css';

const Input = ({ type, value, onChange }) => (
  <input type={type} defaultValue={value} onChange={onChange} />
);

export default Input;
