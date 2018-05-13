import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import './Button.css';

const Button = ({ children, onClick }) => (
  <button className="uiButton" onClick={onClick}>
    {children}
    <Ink />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
