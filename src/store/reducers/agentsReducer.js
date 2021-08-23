const initialState = {
  agents: [],
};

const agentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_AGENTS':
      return { ...state, agents: [...payload] };
    default:
      return state;
  }
};

export default agentsReducer;
