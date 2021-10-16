import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MansionsList from './containers/MansionsList';
import AgentsList from './containers/AgentsList';
import ProtectedRoute from './components/ProtectedRoute';
import AppointmentsList from './containers/AppointmentsList';
import AppointmentsForm from './components/AppointmentsForm';
import Login from './components/Login';
import Mansion from './components/Mansion';
import Agent from './components/Agent';
import Appointment from './components/Appointment';
import Register from './components/Register';

function App() {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const history = useHistory();
  let location = '';
  // Get selected guard route location upon refresh
  if (!history.location.state) {
    location = history.location.pathname;
  } else {
    location = history.location.state.from.pathname;
  }
  return (
    <div data-testid="app" className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mansions">
          <MansionsList />
        </Route>
        <Route exact path="/agents">
          <AgentsList />
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to={location} /> : <Login />}
        </Route>
        <Route path="/register">
          {isLoggedIn ? <Redirect to={location} /> : <Register />}
        </Route>
        <Route path="/mansions/:id">
          <Mansion />
        </Route>
        <Route path="/agents/:id">
          <Agent />
        </Route>
        <ProtectedRoute exact path="/appointments" component={AppointmentsList} />
        <ProtectedRoute exact path="/appointments/create" component={AppointmentsForm} />
        <ProtectedRoute exact path="/appointments/:id" component={Appointment} />
      </Switch>
    </div>
  );
}

export default App;
