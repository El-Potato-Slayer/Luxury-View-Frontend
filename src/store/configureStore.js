import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { fetchData } from './actions';
import { fetchAgentsFailure, fetchAgentsRequest, fetchAgentsSuccess } from './actions/agentActions';
import { fetchAppointmentsFailure, fetchAppointmentsRequest, fetchAppointmentsSuccess } from './actions/appointmentActions';
import { fetchPropertiesFailure, fetchPropertiesRequest, fetchPropertiesSuccess } from './actions/propertyActions';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// store.subscribe(() => { console.log(store.getState()); });
store.dispatch(fetchData('properties', fetchPropertiesRequest, fetchPropertiesSuccess, fetchPropertiesFailure));
store.dispatch(fetchData('agents', fetchAgentsRequest, fetchAgentsSuccess, fetchAgentsFailure));
store.dispatch(fetchData('appointments', fetchAppointmentsRequest, fetchAppointmentsSuccess, fetchAppointmentsFailure, true));

export default store;
