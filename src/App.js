// import './App.css';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { setAgents, setAuth, setProperties } from './store/actions';
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

function App({ isAuth }) {
  // const [redirectedLocation, setRedirectedLocation] = useState();
  const dispatch = useDispatch();
  // const [redirectPath, setRedirectPath] = path ? useState(path) : useState('/');
  let token;
  function redirectPath() {
    return localStorage.getItem('redirectedLocation') ? localStorage.getItem('redirectedLocation') : '/';
  }
  function fetchMansions() {
    axios.get('http://localhost:3000/api/v1/properties')
      .then((resp) => {
        dispatch(setProperties(resp.data));
      });
  }
  function fetchAgents() {
    axios.get('http://localhost:3000/api/v1/agents')
      .then((resp) => {
        dispatch(setAgents(resp.data));
      });
  }
  function isAllowedToRestrictedPath() {
    token = localStorage.getItem('token');
    if (token) {
      // setRedirectPath(localStorage.getItem('redirectedLocation'));
      const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp;
      const dateNow = new Date();
      if (tokenExpiration > dateNow.getTime() / 1000) {
        dispatch(setAuth(true));
      }
    }
  }
  useEffect(() => {
    fetchMansions();
    fetchAgents();
    isAllowedToRestrictedPath();
  }, []);

  return (
    <div data-testid="app" className="App">
      <BrowserRouter>
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
            {isAuth ? <Redirect to={redirectPath()} /> : <Login />}
          </Route>
          <Route path="/register">
            {isAuth ? <Redirect to="/" /> : <Register />}
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
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
