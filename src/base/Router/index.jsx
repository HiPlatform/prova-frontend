import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import routes from './routes';

import './Router.css';

export const Router = ({ route }) => routes({ route });

Router.defaultProps = {
  route: 'home',
};

Router.propTypes = {
  route: PropTypes.string,
};

const mapStateToProps = state => ({ route: state.router.page });

export default connect(mapStateToProps)(Router);
