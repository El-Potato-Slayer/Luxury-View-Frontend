import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import MansionsList from './Pages/MansionsList/MansionsList';
import ProtectedRoute from './Auth/ProtectedRoute/ProtectedRoute';
import AppointmentsList from './Pages/AppointmentsList/AppointmentsList';
import AppointmentsForm from './Components/AppointmentsForm/AppointmentsForm';
import Login from './Pages/Login/Login';
import Mansion from './Pages/Mansion/Mansion';
import Agent from './Pages/Agent/Agent';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Register/Register';
import AgentsList from './Pages/AgentsList/AgentsList';

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
  console.log(location);
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
          {isLoggedIn && location === '/login' && (
            <Redirect to="/" />
          )}
          {isLoggedIn && location !== '/login' ? <Redirect to={location} /> : <Login />}
        </Route>
        <Route path="/register">
          {isLoggedIn && location === '/register' && (
            <Redirect to="/" />
          )}
          {isLoggedIn && location !== '/register' ? <Redirect to={location} /> : <Register />}
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
