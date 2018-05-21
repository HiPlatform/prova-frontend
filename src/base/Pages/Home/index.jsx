import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeType, changeInput, searchData } from './Home.actions';
import HomeForm from '../../Templates/HomeForm';
import './Home.css';

export const Home = ({
  value,
  searchType,
  fnType,
  fnInput,
  fnSearch,
}) => (
  <div className="homePage">
    <HomeForm
      value={value}
      searchType={searchType}
      fnType={fnType}
      fnInput={fnInput}
      fnSearch={fnSearch}
    />
  </div>
);

Home.defaultProps = {
  value: '',
  searchType: '',
  fnType: () => {},
  fnInput: () => {},
  fnSearch: () => {},
};

Home.propTypes = {
  value: PropTypes.string,
  searchType: PropTypes.string,
  fnType: PropTypes.func,
  fnInput: PropTypes.func,
  fnSearch: PropTypes.func,
};

const mapState2ToProps = state => ({
  value: state.home.value,
  searchType: state.home.searchType,
});

const mapDispatch2Props = dispatch =>
  bindActionCreators({
    fnType: changeType,
    fnInput: changeInput,
    fnSearch: searchData,
  }, dispatch);

export default connect(mapState2ToProps, mapDispatch2Props)(Home);
