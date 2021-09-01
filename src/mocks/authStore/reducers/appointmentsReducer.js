const initialState = {
  appointments: [{
    id: 1,
    agent: {
      first_name: 'Darlene (unisex name)',
      last_name: 'Memphis',
      email: 'darthememphis@gmail.com',
      number: '0987431489',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2FEmbarrased_Man.jpg?alt=media&token=7168439b-a738-4122-96af-fba1dc158a9a',
    },
    property: {
      id: 3,
      name: 'Suganti Vapi',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/mansions%2Fmansion3.jpg?alt=media&token=f86b9aac-574c-44f7-b9a8-67fcc19e04ac',
      price: '35000000.0',
      address: '27 Hephner Ave',
    },
    date: '2021-08-24T22:48:32.620Z',
  },
  {
    id: 2,
    agent: {
      first_name: 'Joshua',
      last_name: 'Door',
      email: 'joshuadoor@gmail.com',
      number: '0987634391',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2FP7JIqIE.png?alt=media&token=bfa90cd0-07e5-4b99-b15e-f678570049bd',
    },
    property: {
      id: 1,
      name: '6 Bed Mansion',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/mansions%2Fmansion1.jpg?alt=media&token=af39a749-6fed-41f5-8ed5-d7e0fac7956c',
      price: '100000000.0',
      address: '98 Parker Ave',
    },
    date: '2021-09-01T12:00:00.000Z',
  },
  {
    id: 3,
    agent: {
      first_name: 'Yapi',
      last_name: 'Kobustus',
      email: 'yapikobus@gmail.com',
      number: '0874521321',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2Fsalesman.jpg?alt=media&token=0ec04d27-2070-4673-a6d0-bc0eb34cb10b',
    },
    property: {
      id: 4,
      name: 'Modern Trophy Estate',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/mansions%2Fmansion4.jpg?alt=media&token=b350a3e3-2b06-499f-9ae3-05666c36e67c',
      price: '2500000.0',
      address: '4 Seaview Ave',
    },
    date: '2021-09-01T08:00:00.000Z',
  },
  {
    id: 4,
    agent: {
      first_name: 'Darlene (unisex name)',
      last_name: 'Memphis',
      email: 'darthememphis@gmail.com',
      number: '0987431489',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2FEmbarrased_Man.jpg?alt=media&token=7168439b-a738-4122-96af-fba1dc158a9a',
    },
    property: {
      id: 2,
      name: 'Videa Casale',
      picture: 'https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/mansions%2Fmansion2.jpg?alt=media&token=cbce1309-7a4c-48c6-b4c3-06c733ce7500',
      price: '26000000.0',
      address: '21 Jonta Str',
    },
    date: '2021-09-15T12:30:00.000Z',
  },
  ],
};

const appointmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_APPOINTMENTS':
      return { ...state, appointments: [...payload] };
    default:
      return state;
  }
};

export default appointmentsReducer;
