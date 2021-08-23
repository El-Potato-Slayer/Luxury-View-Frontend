import { combineReducers } from 'redux';
import agentsReducer from './agentsReducer';
import appointmentsReducer from './appointmentsReducer';
import propertiesReducer from './propertiesReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  agentsReducer, appointmentsReducer, propertiesReducer, filterReducer,
});
