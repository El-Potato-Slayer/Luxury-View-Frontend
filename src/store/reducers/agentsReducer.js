const initialState = {
  loading: false,
  agents: [],
  error: '',
};

const agentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_AGENTS':
      return { ...state, agents: [...payload] };
    case 'FETCH_AGENTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_AGENTS_SUCCESS':
      return { loading: false, agents: [...payload], error: '' };
    case 'FETCH_AGENTS_FAILURE':
      return { loading: false, agents: [], error: payload };
    default:
      return state;
  }
};

export default agentsReducer;
