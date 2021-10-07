const initialState = {
  isLoggedIn: false,
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return { ...state, user: { ...payload }, isLoggedIn: true };
    case 'REMOVE_USER':
      return { user: {}, isLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
