import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ isAuth, component: Component, exact }) {
  return (
    <Route
      exact={exact}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        }
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.instanceOf(Object).isRequired,
  exact: PropTypes.bool,
  location: PropTypes.instanceOf(Object),
};

ProtectedRoute.defaultProps = {
  isAuth: false,
  exact: false,
  location: {},
};

// ProtectedRoute.de
// export default ProtectedRoute;
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(ProtectedRoute);
