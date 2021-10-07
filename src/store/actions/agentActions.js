export const fetchAgentsRequest = () => ({
  type: 'FETCH_AGENTS_REQUEST',
});

export const fetchAgentsSuccess = (agents) => ({
  type: 'FETCH_AGENTS_SUCCESS',
  payload: agents,
});

export const fetchAgentsFailure = (error) => ({
  type: 'FETCH_AGENTS_FAILURE',
  payload: error,
});
