// import './App.css';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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
  const dispatch = useDispatch();
  const [mansionsError, setMansionsError] = useState();
  const [agentsError, setAgentsError] = useState();
  let token;
  function redirectPath() {
    return localStorage.getItem('redirectedLocation') ? localStorage.getItem('redirectedLocation') : '/';
  }
  function fetchMansions() {
    try {
      axios.get('properties')
        .then((resp) => {
          dispatch(setProperties(resp.data));
          return resp.data;
        });
    } catch {
      setMansionsError('Mansions could not be fetched. Please try again later');
    }
  }
  function fetchAgents() {
    try {
      axios.get('agents')
        .then((resp) => {
          dispatch(setAgents(resp.data));
        });
    } catch {
      setAgentsError('Agents could not be fetched. Please try again later');
    }
  }
  function displayError(error) {
    if (error) {
      return (
        <p>{mansionsError}</p>
      );
    }
    return null;
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
        {displayError(mansionsError)}
        {displayError(agentsError)}
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
