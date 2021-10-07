import axios from 'axios';

export const setAgents = (payload) => ({
  type: 'SET_AGENTS',
  payload,
});

export const setAppointments = (payload) => ({
  type: 'SET_APPOINTMENTS',
  payload,
});

export const setAuth = (payload) => ({
  type: 'SET_AUTH',
  payload,
});

export const setUser = (payload) => ({
  type: 'SET_USER',
  payload,
});

export const fetchData = (endpoint, request, success, failure) => function (dispatch) {
  dispatch(request());
  axios.get(`https://boiling-tundra-41512.herokuapp.com/api/v1/${endpoint}`)
    .then((res) => {
      dispatch(success(res.data));
    })
    .catch((error) => {
      dispatch(failure(error));
    });
  // dispatch(fetchPropertiesRequest());
  // axios.get('https://boiling-tundra-41512.herokuapp.com/api/v1/properties')
  //   .then((res) => {
  //     console.log(res.data);
  //     dispatch(fetchPropertiesSuccess(res.data));
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     dispatch(fetchPropertiesFailure(error));
  //   });
};
