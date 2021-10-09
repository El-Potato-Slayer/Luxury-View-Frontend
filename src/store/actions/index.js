import axios from 'axios';
// import { setUser } from './userActions';

export const setAppointments = (payload) => ({
  type: 'SET_APPOINTMENTS',
  payload,
});

export const fetchData = (endpoint, request, success, failure,
  authHeader = false) => (dispatch) => {
  dispatch(request());
  if (!authHeader) {
    // axios.get(`https://boiling-tundra-41512.herokuapp.com/api/v1/${endpoint}`)
    axios.get(`http://localhost:3000/api/v1/${endpoint}`)
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  } else {
    // axios.get(`https://boiling-tundra-41512.herokuapp.com/api/v1/${endpoint}`, {
    axios.get(`http://localhost:3000/api/v1/${endpoint}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  }
};
