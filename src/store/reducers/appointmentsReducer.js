const initialState = {
  loading: false,
  appointments: [],
  error: '',
};

const appointmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_APPOINTMENTS':
      return { ...state, appointments: [...payload] };
    case 'FETCH_APPOINTMENTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_APPOINTMENTS_SUCCESS':
      return { loading: false, appointments: [...payload], error: '' };
    case 'FETCH_APPOINTMENTS_FAILURE':
      return { loading: false, appointments: [], error: payload };
    default:
      return state;
  }
};

export default appointmentsReducer;
