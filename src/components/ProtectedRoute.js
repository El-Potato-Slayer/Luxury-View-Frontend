import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';

function ProtectedRoute({
  isAuth, component: Component, exact, path,
}) {
  const history = useHistory();
  console.log(history.location);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (isAuth) {
          localStorage.setItem('redirectedLocation', history.location.pathname);
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
  path: PropTypes.string.isRequired,
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
