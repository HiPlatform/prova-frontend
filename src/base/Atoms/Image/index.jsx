import React from 'react';
import PropTypes from 'prop-types';

import './Image.css';

const Image = ({ url, alt }) => (
  <img src={url} alt={alt} />
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
