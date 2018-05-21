import React from 'react';
import PropTypes from 'prop-types';

import './Topbar.css';

const Topbar = ({ navigate }) => (
  <div className="topbar">
    <h1 className="topbar__back">
      <button onClick={() => navigate('home')}>
        <i className="fa fa-chevron-left" />
      </button>
    </h1>
    <h1 className="topbar__title">Music Tracker</h1>
  </div>
);

Topbar.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default Topbar;
