import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import store from './store/configureStore';

axios.defaults.baseURL = 'http://localhost:3000/api/v1/';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
