import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Home.css';

export const Home = ({ label }) => (
  <div>
    <h1>{label}</h1>
  </div>
);

Home.defaultProps = {
  label: '',
};

Home.propTypes = {
  label: PropTypes.string,
};

const mapState2ToProps = state => ({ label: state.home.label });

export default connect(mapState2ToProps)(Home);
