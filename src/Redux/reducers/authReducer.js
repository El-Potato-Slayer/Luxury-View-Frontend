const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_AUTH':
      return { ...state, isAuth: payload };
    default:
      return state;
  }
};

export default authReducer;
