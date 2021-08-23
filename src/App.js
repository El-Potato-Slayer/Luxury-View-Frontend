import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { setAgents, setProperties } from './store/actions';
import MansionsList from './containers/MansionsList';
import AgentsList from './containers/AgentsList';
import ProtectedRoute from './components/ProtectedRoute';
import AppointmentsList from './containers/AppointmentsList';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/properties')
      .then((resp) => {
        dispatch(setProperties(resp.data));
      });
    axios.get('http://localhost:3000/api/v1/agents')
      .then((resp) => {
        dispatch(setAgents(resp.data));
      });
  }, []);

  return (
    <div data-testid="app" className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mansions">
            <MansionsList />
          </Route>
          {/* <Route path="/appointments">
            <div data-testid="app-appointments">
              <h2>Appointments</h2>
            </div>
          </Route> */}
          <Route path="/agents">
            <AgentsList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth={false} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
