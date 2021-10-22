import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './Redux/configureStore';

// axios.defaults.baseURL = 'https://boiling-tundra-41512.herokuapp.com/api/v1/';
// axios.defaults.baseURL = 'https://secure-journey-36191.herokuapp.com/api/v1/';
axios.defaults.baseURL = 'http://localhost:3000/api/v1/';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
