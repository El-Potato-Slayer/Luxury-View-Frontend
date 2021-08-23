import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth, setUser } from '../store/actions';

function Navbar({ isAuth }) {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
    dispatch(setAuth(false));
    dispatch(setUser({}));
  };

  function authNavItem(isLoggedIn) {
    return isLoggedIn ? <Link data-testid="navbar-logout" to="/" onClick={logout}>Logout</Link>
      : <Link data-testid="navbar-login" to="/login">Login</Link>;
  }

  return (
    <div data-testid="navbar" className="navbar">
      <Link data-testid="navbar-homepage" to="/">Home</Link>
      <Link data-testid="navbar-mansions" to="/mansions">Mansions</Link>
      <Link data-testid="navbar-appointments" to="/appointments">Appointments</Link>
      <Link data-testid="navbar-agents" to="/agents">Agents</Link>
      {authNavItem(isAuth)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Navbar);
