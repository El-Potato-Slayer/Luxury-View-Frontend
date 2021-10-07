import axios from 'axios';

export const setAppointments = (payload) => ({
  type: 'SET_APPOINTMENTS',
  payload,
});

// export const setAuth = (payload) => ({
//   type: 'SET_AUTH',
//   payload,
// });

// export const setUser = (payload) => ({
//   type: 'SET_USER',
//   payload,
// });

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

// export const fetchUserData = (endpoint, request, success, failure) => (dispatch) => {
//   axios.get('appointments', {
//     headers: {
//       Authorization: `token ${localStorage.getItem('token')}`,
//     },
//   })
//     .then((res) => {
//       dispatch(setAppointments(res.data));
//       setCurrentAppointments(res.data);
//     });
// }
