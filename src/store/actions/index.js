export const setAgents = (payload) => ({
  type: 'SET_AGENTS',
  payload,
});

export const setAppointments = (payload) => ({
  type: 'SET_APPOINTMENTS',
  payload,
});

export const setProperties = (payload) => ({
  type: 'SET_PROPERTIES',
  payload,
});

export const changeFilter = (name) => ({
  type: 'CHANGE_FILTER',
  name,
});
