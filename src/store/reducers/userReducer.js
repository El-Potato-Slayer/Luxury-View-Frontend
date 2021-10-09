const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {},
  error: '',
  selectedGuardRoute: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state, user: { ...payload }, isLoggedIn: true, error: '', loading: false,
      };
    case 'CLEAR_USER':
      return {
        user: {}, isLoggedIn: false, loading: false, error: '', selectedGuardedRoute: null,
      };
    case 'SET_SELECTED_ROUTE':
      return { selectedGuardRoute: payload };
    case 'FETCH_USER_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_USER_SUCCESS':
      return {
        loading: false, user: { ...payload }, error: '', isLoggedIn: true,
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false, user: {}, error: payload, isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
