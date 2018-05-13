import React from 'react';
import PropTypes from 'prop-types';

import './Attribute.css';

const Attribute = ({ text }) => (
  <p>{text}</p>
);

Attribute.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Attribute;
