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
