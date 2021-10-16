import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearUser } from '../store/actions/userActions';
// import { setAuth, setUser } from '../store/actions';

function Navbar() {
  const [burgerState, setBurgerState] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
    dispatch(clearUser());
  };

  const handleBurgerState = () => {
    setBurgerState(!burgerState);
  };

  function authNavItem(isLoggedIn) {
    if (isLoggedIn) {
      return (
        <Link onClick={() => { logout(); handleBurgerState(); }} data-testid="navbar-logout" className="nav-item" to="/">Logout</Link>
      );
    }
    return (
      <>
        <Link onClick={handleBurgerState} data-testid="navbar-login" className="nav-item" to="/login">Login</Link>
        <Link onClick={handleBurgerState} data-testid="navbar-register" className="nav-item" to="/register">Register</Link>
      </>
    );
  }

  return (
    <>
      <div data-testid="navbar" className={`navbar${burgerState ? ' open' : ''}`}>
        <div aria-hidden="true" onClick={handleBurgerState} onKeyDown={handleBurgerState} className={`dark-filter${!burgerState ? ' hide' : ''}`} />
        <div className={`burger${burgerState ? ' open' : ''}`}>
          <button type="button" id="burger-wrapper" className="burger-wrapper" onClick={handleBurgerState}>
            <div id="burger-menu" className={`burger-menu${burgerState ? ' open' : ''}`} />
          </button>
        </div>
        <img src="/assets/logo.png" className="nav-logo" alt="" />
        <div className="nav-links">
          <Link onClick={handleBurgerState} data-testid="navbar-homepage" className="nav-item" to="/">Home</Link>
          <Link onClick={handleBurgerState} data-testid="navbar-mansions" className="nav-item" to="/mansions">Mansions</Link>
          <Link onClick={handleBurgerState} data-testid="navbar-appointments" className="nav-item" to="/appointments">Appointments</Link>
          <Link onClick={handleBurgerState} data-testid="navbar-agents" className="nav-item" to="/agents">Agents</Link>
          {authNavItem(isLoggedIn)}
        </div>
        <div className="nav-social" />
      </div>
    </>
  );
}

export default Navbar;
