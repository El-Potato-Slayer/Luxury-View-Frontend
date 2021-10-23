export const clearAppointments = () => ({
  type: 'CLEAR_APPOINTMENTS',
});

export const setAppointmentSuccessMessage = (message) => ({
  type: 'SET_APPOINTMENTS_SUCCESS_MESSAGE',
  payload: message,
});

export const setAppointmentErrorMessage = (message) => ({
  type: 'SET_APPOINTMENTS_ERROR_MESSAGE',
  payload: message,
});

export const fetchAppointmentsRequest = () => ({
  type: 'FETCH_APPOINTMENTS_REQUEST',
});

export const fetchAppointmentsSuccess = (appointments) => ({
  type: 'FETCH_APPOINTMENTS_SUCCESS',
  payload: appointments,
});

export const fetchAppointmentsFailure = (error) => ({
  type: 'FETCH_APPOINTMENTS_FAILURE',
  payload: error,
});

export const postAppointmentRequest = () => ({
  type: 'POST_APPOINTMENT_REQUEST',
});

export const postAppointmentSuccess = (appointments) => ({
  type: 'POST_APPOINTMENT_SUCCESS',
  payload: appointments,
});

export const postAppointmentFailure = (error) => ({
  type: 'POST_APPOINTMENT_FAILURE',
  payload: error,
});

export const deleteAppointmentsRequest = () => ({
  type: 'DELETE_APPOINTMENT_REQUEST',
});

export const deleteAppointmentsSuccess = (appointments) => ({
  type: 'DELETE_APPOINTMENT_SUCCESS',
  payload: appointments,
});

export const deleteAppointmentsFailure = (error) => ({
  type: 'POST_APPOINTMENTS_FAILURE',
  payload: error,
});

// export const addAppointment = (appointment) => ({
//   type: 'ADD_APPOINTMENT',
//   payload: appointment,
// });

export const filterAppointment = (id) => ({
  type: 'FILTER_APPOINTMENT',
  payload: id,
});
