import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { fetchData } from './actions';
import { fetchAgentsFailure, fetchAgentsRequest, fetchAgentsSuccess } from './actions/agentActions';
import { fetchAppointmentsFailure, fetchAppointmentsRequest, fetchAppointmentsSuccess } from './actions/appointmentActions';
import { fetchPropertiesFailure, fetchPropertiesRequest, fetchPropertiesSuccess } from './actions/propertyActions';
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from './actions/userActions';
import rootReducer from './reducers';

const authToken = localStorage.getItem('token');
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// Fetch data on app init
store.dispatch(fetchData('properties', fetchPropertiesRequest, fetchPropertiesSuccess, fetchPropertiesFailure));
store.dispatch(fetchData('agents', fetchAgentsRequest, fetchAgentsSuccess, fetchAgentsFailure));
// Fetch appointments if auth token exists
if (authToken) {
  // store.dispatch(fetchUserData());
  store.dispatch(fetchData('profile', fetchUserRequest, fetchUserSuccess, fetchUserFailure, true));
  store.dispatch(fetchData('appointments', fetchAppointmentsRequest, fetchAppointmentsSuccess, fetchAppointmentsFailure, true));
}

export default store;
