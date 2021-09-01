// import {
//   cleanup, render, screen,
// } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Switch } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import ProtectedRoute from '../components/ProtectedRoute';
// import AppointmentsList from '../containers/AppointmentsList';
// import store from '../store/configureStore';

// afterEach(cleanup);

// test('Checks if "Home" link contains the text "Home"', () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>,
//   );

//   expect(screen.getByTestId('navbar-mansions')).toHaveTextContent('Mansions');
// });

// test('Checks if "Mansions" link contains the text "Mansions"', () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>,
//   );

//   expect(screen.getByTestId('navbar-mansions')).toHaveTextContent('Mansions');
// });

// test('Checks if "Appointments" link contains the text "Appointments"', () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>,
//   );

//   expect(screen.getByTestId('navbar-appointments')).toHaveTextContent('Appointments');
// });

// test('Checks if "Agents" link contains the text "Agents"', () => {
//   render(
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>,
//   );

//   expect(screen.getByTestId('navbar-agents')).toHaveTextContent('Agents');
// });

// test('AppointmentsList does not render if unauthorized', () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Switch>
//           <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth={false} location="/" />
//         </Switch>
//       </BrowserRouter>
//     </Provider>,
//   );
//   expect(screen.queryByText('Appointments')).not.toBeInTheDocument();
// });

// test('AppointmentsList renders if authorized', () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
//       </BrowserRouter>
//     </Provider>,
//   );
//   expect(screen.queryByText('Appointments')).toBeInTheDocument();
// });
