import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ isAuth, component: Component }) {
  return (
    <Route
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
  component: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

// ProtectedRoute.de
export default ProtectedRoute;
