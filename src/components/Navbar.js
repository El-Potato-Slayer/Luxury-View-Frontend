import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div data-testid="navbar" className="navbar">
      <Link data-testid="navbar-homepage" to="/">Home</Link>
      <Link data-testid="navbar-mansions" to="/mansions">Mansions</Link>
      <Link data-testid="navbar-appointments" to="/appointments">Appointments</Link>
      <Link data-testid="navbar-agents" to="/agents">Agents</Link>
    </div>
  );
}

export default Navbar;
