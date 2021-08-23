const initialState = {
  agents: [],
};

const agentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_AGENTS':
      return { ...state, properties: [...payload] };
    default:
      return state;
  }
};

export default agentsReducer;
