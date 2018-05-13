import React from 'react';

import './Topbar.css';

const Topbar = ({ navigate }) => (
  <div className="topbar">
    <h1 className="topbar__back" onClick={() => navigate('home')}>
      <i className="fa fa-chevron-left" />
    </h1>
    <h1 className="topbar__title">Music Tracker</h1>
  </div>
);

export default Topbar;
