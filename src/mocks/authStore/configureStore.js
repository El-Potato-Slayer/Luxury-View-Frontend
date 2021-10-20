import { createStore } from 'redux';
import rootReducer from './reducers';

const Authorizedstore = createStore(rootReducer);

export default Authorizedstore;
