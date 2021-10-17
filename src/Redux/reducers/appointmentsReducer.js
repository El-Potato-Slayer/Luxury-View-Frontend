const initialState = {
  loading: false,
  appointments: [],
  error: '',
};

// function filteredAppointments(appointments, id) {
//   appointments.filter((appointment) => (
//     appointment.id !== id
//   ));
// }

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
    case 'DELETE_APPOINTMENT':
      return { appointments: state.appointments.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};

export default appointmentsReducer;
