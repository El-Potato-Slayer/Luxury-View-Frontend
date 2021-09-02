const initialState = {
  agents: [
    {
      id: 1,
      first_name: 'Joshua',
      last_name: 'Door',
      email: 'joshuadoor@gmail.com',
      number: '0987634391',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2FP7JIqIE.png?alt=media&token=bfa90cd0-07e5-4b99-b15e-f678570049bd',
    },
    {
      id: 2,
      first_name: 'Darlene (unisex name)',
      last_name: 'Memphis',
      email: 'darthememphis@gmail.com',
      number: '0987431489',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2FEmbarrased_Man.jpg?alt=media&token=7168439b-a738-4122-96af-fba1dc158a9a',
    },
    {
      id: 3,
      first_name: 'Yapi',
      last_name: 'Kobustus',
      email: 'yapikobus@gmail.com',
      number: '0874521321',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2Fsalesman.jpg?alt=media&token=0ec04d27-2070-4673-a6d0-bc0eb34cb10b',
    },
  ],
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
