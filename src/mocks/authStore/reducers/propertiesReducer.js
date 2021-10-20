const initialState = {
  properties: [],
};

const propertiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PROPERTIES':
      return { ...state, properties: [...payload] };
    default:
      return state;
  }
};

export default propertiesReducer;
