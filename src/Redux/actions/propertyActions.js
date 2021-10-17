export const fetchPropertiesRequest = () => ({
  type: 'FETCH_PROPERTIES_REQUEST',
});

export const fetchPropertiesSuccess = (properties) => ({
  type: 'FETCH_PROPERTIES_SUCCESS',
  payload: properties,
});

export const fetchPropertiesFailure = (error) => ({
  type: 'FETCH_PROPERTIES_FAILURE',
  payload: error,
});
