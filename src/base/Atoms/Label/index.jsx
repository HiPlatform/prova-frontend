import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

const Label = ({ text }) => (
  <span>{text}</span>
);

Label.defaultProps = {
  text: '',
};

Label.propTypes = {
  text: PropTypes.string,
};

export default Label;
