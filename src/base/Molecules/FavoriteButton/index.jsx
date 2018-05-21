import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleFavorite from './FavoriteButton.actions';
import './FavoriteButton.css';

const isFavorite = (item, arr) => arr.indexOf(item) !== -1;

export const FavoriteButton = ({
  item,
  list,
  favorites,
  fnToggle,
}) => (
  <button
    className={`favoriteButton ${isFavorite(item, favorites) ? 'marked' : ''}`}
    onClick={() => fnToggle(list, item)}
  >
    <i className="fa fa-heart" />
  </button>
);

FavoriteButton.defaultProps = {
  favorites: [],
  fnToggle: () => {},
};

FavoriteButton.propTypes = {
  item: PropTypes.shape().isRequired,
  list: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape()),
  fnToggle: PropTypes.func,
};

const mapStateToProps = state => ({ favorites: state.favorites.items });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fnToggle: toggleFavorite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
