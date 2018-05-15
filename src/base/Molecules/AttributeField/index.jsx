import React from 'react';

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
  label: Label.propTypes.text,
  text: Attribute.propTypes.text,
};

export default AttributeField;
