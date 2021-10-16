import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({
  component: Component, exact, path,
}) {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (isLoggedIn) {
          return <Component />;
        }
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  exact: PropTypes.bool,
  location: PropTypes.instanceOf(Object),
  path: PropTypes.string.isRequired,
};

ProtectedRoute.defaultProps = {
  exact: false,
  location: {},
};

export default ProtectedRoute;
