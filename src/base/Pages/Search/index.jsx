import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getDetails from './Search.actions';
import changePage from '../../Router/Router.actions';

import Topbar from '../../Organisms/Topbar';
import TypeSelector from './TypeSelector';

import './Search.css';

export const Search = ({
  searchType,
  items,
  fnDetails,
  fnNavigate,
}) => (
  <div className="searchPage">
    <Topbar navigate={fnNavigate} />
    <div className="searchPage__content">
      {items.map(item => (
        <TypeSelector
          key={item.id}
          type={searchType}
          details={fnDetails}
          {...item}
        />
      ))}
    </div>
  </div>
);

Search.defaultProps = {
  searchType: '',
  items: [],
  fnDetails: () => {},
  fnNavigate: () => {},
};

Search.propTypes = {
  searchType: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()),
  fnDetails: PropTypes.func,
  fnNavigate: PropTypes.func,
};

const mapStateToProps = state => ({
  searchType: state.home.searchType,
  items: state.home.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fnDetails: getDetails,
    fnNavigate: changePage,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
