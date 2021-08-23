import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar({ isAuth }) {
  function authNavItem(isLoggedIn) {
    return isLoggedIn ? <Link data-testid="navbar-logout" to="/">Logout</Link>
      : <Link data-testid="navbar-login" to="/">Login</Link>;
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
