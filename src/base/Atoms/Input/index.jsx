import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type, value, onChange }) => (
  <input type={type} defaultValue={value} onChange={onChange} />
);

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default Input;
