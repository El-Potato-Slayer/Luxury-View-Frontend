import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import store from './store/configureStore';

axios.defaults.baseURL = 'https://boiling-tundra-41512.herokuapp.com/api/v1/';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
