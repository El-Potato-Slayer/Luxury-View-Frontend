const initialState = {
  loading: false,
  appointments: [],
  error: '',
  success: '',
};

const appointmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_APPOINTMENTS':
      return { ...state, appointments: [...payload] };
    case 'SET_APPOINTMENTS_SUCCESS_MESSAGE':
      return { ...state, success: payload };
    case 'SET_APPOINTMENTS_ERROR_MESSAGE':
      return { ...state, error: payload };
    case 'FETCH_APPOINTMENTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_APPOINTMENTS_SUCCESS':
      return { loading: false, appointments: [...payload], error: '' };
    case 'FETCH_APPOINTMENTS_FAILURE':
      return { loading: false, appointments: [], error: payload };
    // case 'ADD_APPOINTMENT':
    //   return { ...state, appointments: state.appointments.concat(payload) };
    case 'POST_APPOINTMENT_REQUEST':
      return { ...state, loading: true };
    case 'POST_APPOINTMENT_SUCCESS':
      return { loading: false, appointments: state.appointments.concat(payload), error: '' };
    case 'POST_APPOINTMENT_FAILURE':
      return { ...state, loading: false, error: payload };
    case 'DELETE_APPOINTMENT_REQUEST':
      return { ...state, loading: true };
    case 'DELETE_APPOINTMENT_SUCCESS':
      return {
        ...state, loading: false, success: payload, error: '',
      };
    case 'DELETE_APPOINTMENT_FAILURE':
      return {
        ...state, loading: false, error: payload, success: '',
      };
    case 'FILTER_APPOINTMENT':
      return { appointments: state.appointments.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};

export default appointmentsReducer;

// const initialState = {
//   loading: false,
//   appointments: [],
//   error: '',
//   success: '',
// };

// const appointmentsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'SET_APPOINTMENTS':
//       return { ...state, appointments: [...payload] };
//     case 'FETCH_APPOINTMENTS_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_APPOINTMENTS_SUCCESS':
//       return { loading: false, appointments: [...payload], error: '' };
//     case 'FETCH_APPOINTMENTS_FAILURE':
//       return { loading: false, appointments: [], error: payload };
//     case 'ADD_APPOINTMENT_REQUEST':
//       return { ...state, loading: true };
//     case 'ADD_APPOINTMENT_SUCCESS':
//       return { loading: false, appointments: state.appointments.push(payload) };
//     case 'ADD_APPOINTMENT_SUCCESS':
//       return { appointments: state.appointments.push(payload) };
//     case 'DELETE_APPOINTMENT_REQUEST':
//       return { ...state, loading: true };
//     case 'DELETE_APPOINTMENT_SUCCESS':
//       return {
//         ...state, loading: false, success: payload, error: '',
//       };
//     case 'DELETE_APPOINTMENT_FAILURE':
//       return { ...state, loading: false, error: payload, success: ''};
//     case 'DELETE_APPOINTMENT':
//       return { appointments: state.appointments.filter((item) => item.id !== payload) };
//     default:
//       return state;
//   }
// };

// export default appointmentsReducer;
