import { combineReducers } from 'redux';
import agentsReducer from './agentsReducer';
import appointmentsReducer from './appointmentsReducer';
import authReducer from './authReducer';
import propertiesReducer from './propertiesReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  agentsReducer, appointmentsReducer, authReducer, propertiesReducer, userReducer, filterReducer,
});
