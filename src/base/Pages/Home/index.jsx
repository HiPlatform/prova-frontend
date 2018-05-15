import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cond, propEq, T } from 'ramda';

import { changeType, changeInput, searchData, getDetails, changePage } from './Home.actions';
import Topbar from '../../Organisms/Topbar';
import ArtistCard from '../../Organisms/ArtistCard';
import AlbumCard from '../../Organisms/AlbumCard';
import TrackCard from '../../Organisms/TrackCard';
import HomeForm from '../../Templates/HomeForm';
import './Home.css';

const TypeSelect = cond([
  [propEq('type', 'artist'), props => <ArtistCard {...props} />],
  [propEq('type', 'album'), props => <AlbumCard {...props} />],
  [propEq('type', 'track'), props => <TrackCard {...props} />],
  [T, () => null],
]);

export const Home = ({
  label,
  value,
  searchType,
  items,
  page,
  fnType,
  fnInput,
  fnSearch,
  fnDetails,
  fnNavigate,
}) => (
  <div>
    {page === 'home'
    ? (
      <div className="homePage">
        <HomeForm
          value={value}
          searchType={searchType}
          fnType={fnType}
          fnInput={fnInput}
          fnSearch={fnSearch}
        />
      </div>
    )
    : (
      <div>
        <Topbar navigate={fnNavigate} />
        <div style={{ display: 'flex', flexFlow: 'row wrap', marginTop: 50, overflowX: 'hidden' }}>
          {items.map(item => (
            <TypeSelect
              key={item.id}
              type={searchType}
              details={fnDetails}
              {...item}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

Home.defaultProps = {
  label: '',
};

Home.propTypes = {
  label: PropTypes.string,
};

const mapState2ToProps = state => ({
  label: state.home.label,
  value: state.home.value,
  searchType: state.home.searchType,
  items: state.home.items,
  page: state.home.page,
});

const mapDispatch2Props = dispatch =>
  bindActionCreators({
    fnType: changeType,
    fnInput: changeInput,
    fnSearch: searchData,
    fnDetails: getDetails,
    fnNavigate: changePage,
  }, dispatch);

export default connect(mapState2ToProps, mapDispatch2Props)(Home);
