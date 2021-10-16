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
// function App() {
//   const dispatch = useDispatch();
//   const [mansionsError, setMansionsError] = useState();
//   const [agentsError, setAgentsError] = useState();
//   const isAuth = useSelector((state) => state.authReducer.isAuth);
//   let token;
//   function redirectPath() {
//     return localStorage.getItem('redirectedLocation') ?
// localStorage.getItem('redirectedLocation') : '/';
//   }
//   function fetchMansions() {
//     try {
//       axios.get('properties')
//         .then((resp) => {
//           dispatch(setProperties(resp.data));
//           return resp.data;
//         });
//     } catch {
//       setMansionsError('Mansions could not be fetched. Please try again later');
//     }
//   }
//   function fetchAgents() {
//     try {
//       axios.get('agents')
//         .then((resp) => {
//           dispatch(setAgents(resp.data));
//         });
//     } catch {
//       setAgentsError('Agents could not be fetched. Please try again later');
//     }
//   }
//   function displayError(error) {
//     if (error) {
//       return (
//         <p>{mansionsError}</p>
//       );
//     }
//     return null;
//   }
//   function isAllowedToRestrictedPath() {
//     token = localStorage.getItem('token');
//     if (token) {
//       // setRedirectPath(localStorage.getItem('redirectedLocation'));
//       const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp;
//       const dateNow = new Date();
//       if (tokenExpiration > dateNow.getTime() / 1000) {
//         dispatch(setAuth(true));
//       }
//     }
//   }
//   useEffect(() => {
//     fetchMansions();
//     fetchAgents();
//     isAllowedToRestrictedPath();
//     console.log(isAuth);
//   }, []);

//   return (
//     <div data-testid="app" className="App">
//       <BrowserRouter>
//         <Navbar />
//         {displayError(mansionsError)}
//         {displayError(agentsError)}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/mansions">
//             <MansionsList />
//           </Route>
//           <Route exact path="/agents">
//             <AgentsList />
//           </Route>
//           <Route path="/login">
//             {isAuth ? <Redirect to={redirectPath()} /> : <Login />}
//           </Route>
//           <Route path="/register">
//             {isAuth ? <Redirect to="/" /> : <Register />}
//           </Route>
//           <Route path="/mansions/:id">
//             <Mansion />
//           </Route>
//           <Route path="/agents/:id">
//             <Agent />
//           </Route>
//           <ProtectedRoute exact path="/appointments" component={AppointmentsList} />
//           <ProtectedRoute exact path="/appointments/create" component={AppointmentsForm} />
//           <ProtectedRoute exact path="/appointments/:id" component={Appointment} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// // const mapStateToProps = (state) => ({
// //   isAuth: state.authReducer.isAuth,
// // });

// // App.propTypes = {
// //   isAuth: PropTypes.bool.isRequired,
// // };

// export default App;
