import './App.css';
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
import Login from './components/Login';
import Mansion from './components/Mansion';

function App({ isAuth }) {
  const dispatch = useDispatch();
  let token;
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/properties')
      .then((resp) => {
        dispatch(setProperties(resp.data));
      });
    axios.get('http://localhost:3000/api/v1/agents')
      .then((resp) => {
        dispatch(setAgents(resp.data));
      });
    token = localStorage.getItem('token');
    if (token) {
      const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp;
      const dateNow = new Date();
      if (tokenExpiration > dateNow.getTime() / 1000) {
        dispatch(setAuth(true));
      }
    }
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
            {isAuth ? <Redirect to="/appointments" /> : <Login />}
          </Route>
          <Route path="/mansions/:id">
            <Mansion />
          </Route>
          <ProtectedRoute exact path="/appointments" component={AppointmentsList} />
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
