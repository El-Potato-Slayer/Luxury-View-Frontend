export const setUser = (payload) => ({
  type: 'SET_USER',
  payload,
});

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

export const setSelectedGuardRoute = (route) => ({
  type: 'SET_SELECTED_ROUTE',
  payload: route,
});

export const fetchUserRequest = () => ({
  type: 'FETCH_USER_REQUEST',
});

export const fetchUserSuccess = (user) => ({
  type: 'FETCH_USER_SUCCESS',
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: 'FETCH_USER_FAILURE',
  payload: error,
});
