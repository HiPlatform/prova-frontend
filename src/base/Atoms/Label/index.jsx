import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

const Label = ({ text }) => (
  <span>{text}</span>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
