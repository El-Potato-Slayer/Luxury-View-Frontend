const initialState = {
  loading: false,
  properties: [],
  error: '',
};

const propertiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PROPERTIES':
      return { ...state, properties: [...payload] };
    case 'FETCH_PROPERTIES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PROPERTIES_SUCCESS':
      return { loading: false, properties: [...payload], error: '' };
    case 'FETCH_PROPERTIES_FAILURE':
      return { loading: false, properties: [], error: payload };
    default:
      return state;
  }
};

export default propertiesReducer;
