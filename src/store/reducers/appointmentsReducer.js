const initialState = {
  appointments: [],
};

const appointmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_APPOINTMENTS':
      return { ...state, properties: [...payload] };
    default:
      return state;
  }
};

export default appointmentsReducer;
