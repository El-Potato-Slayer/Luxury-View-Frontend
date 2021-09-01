// import {
//   cleanup, render, screen,
// } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// // import renderer from 'react-test-renderer';
// import '@testing-library/jest-dom';
// import { Provider } from 'react-redux';
// import store from '../store/configureStore';
// import AppointmentsList from '../containers/AppointmentsList';
// import ProtectedRoute from '../components/ProtectedRoute';

// afterEach(cleanup);

// test('Renders the AppointmentsList component without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
//       </BrowserRouter>
//     </Provider>,
//     div,
//   );
// });

// test('Checks if title is rendered', () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
//       </BrowserRouter>
//     </Provider>,
//   );
//   expect(screen.getByTestId('appointments')).toHaveTextContent('Appointments');
// });

// // it('matches snapshot', () => {
// //   const tree = renderer.create(
// //     <BrowserRouter>
// //       <Home />
// //       ,
// //     </BrowserRouter>,
// //   ).toJSON();
// //   expect(tree).toMatchSnapshot();
// // });
