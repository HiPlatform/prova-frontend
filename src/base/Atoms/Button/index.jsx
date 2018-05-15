import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import './Button.css';

const Button = ({ children, onClick, modifier }) => (
  <button className={`uiButton ${modifier}`} onClick={onClick}>
    {children}
    <Ink />
  </button>
);

Button.defaultProps = {
  modifier: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  modifier: PropTypes.string,
};

export default Button;
