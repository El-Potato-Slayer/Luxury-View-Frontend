import PropTypes from 'prop-types';
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
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
  exact: PropTypes.bool,
  location: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  exact: false,
  location: '',
};

// ProtectedRoute.de
export default ProtectedRoute;
