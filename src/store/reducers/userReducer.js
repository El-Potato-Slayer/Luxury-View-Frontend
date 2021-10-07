const initialState = {
  isAuthenticated: false,
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return { ...state, user: { ...payload }, isAuthenticated: true };
    case 'REMOVE_USER':
      return { user: {}, isAuthenticated: false };
    default:
      return state;
  }
};

export default userReducer;
