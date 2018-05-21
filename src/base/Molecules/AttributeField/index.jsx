import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../Atoms/Label';
import Attribute from '../../Atoms/Attribute';

import './AttributeField.css';

const AttributeField = ({ label, text }) => (
  <div className="attributeField">
    {label && <Label text={label} />}
    <Attribute text={text} />
  </div>
);

AttributeField.defaultProps = {
  label: null,
  text: '',
};

AttributeField.propTypes = {
  label: PropTypes.string,
  text: Attribute.propTypes.text,
};

export default AttributeField;
