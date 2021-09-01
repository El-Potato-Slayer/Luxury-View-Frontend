import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import authorizedStore from '../mocks/authStore/configureStore';
import AppointmentsList from '../containers/AppointmentsList';
import ProtectedRoute from '../components/ProtectedRoute';
import App from '../App';

afterEach(cleanup);

test('Renders the AppointmentsList component without crashing', () => {
  render(
    <Provider store={authorizedStore}>
      <App>
        <BrowserRouter>
          <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
        </BrowserRouter>
      </App>
    </Provider>,
  );
});

test('Checks if title is rendered', () => {
  render(
    <Provider store={authorizedStore}>
      <App>
        <BrowserRouter>
          <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-appointments'));
  expect(screen.getByTestId('appointments')).toHaveTextContent('Appointments');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={authorizedStore}>
      <App>
        <BrowserRouter>
          <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
        </BrowserRouter>
      </App>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
