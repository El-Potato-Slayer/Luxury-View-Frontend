import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';
import AppointmentsList from '../containers/AppointmentsList';
import store from '../mocks/store/configureStore';
import authorizedStore from '../mocks/authstore/configureStore';

afterEach(cleanup);

test('Checks if "Home" link contains the text "Home"', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByTestId('navbar-mansions')).toHaveTextContent('Mansions');
});

test('Checks if "Mansions" link contains the text "Mansions"', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByTestId('navbar-mansions')).toHaveTextContent('Mansions');
});

test('Checks if "Appointments" link contains the text "Appointments"', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByTestId('navbar-appointments')).toHaveTextContent('Appointments');
});

test('Checks if "Agents" link contains the text "Agents"', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByTestId('navbar-agents')).toHaveTextContent('Agents');
});

test('AppointmentsList does not render if unauthorized', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth={false} location="/" />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-appointments'));
  expect(screen.queryByText('Date')).not.toBeInTheDocument();
});

test('Login component renders if unauthorized', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth={false} location="/" />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-appointments'));
  expect(screen.getByTestId('login')).toHaveTextContent('Login');
});

test('AppointmentsList renders if authorized', () => {
  render(
    <Provider store={authorizedStore}>
      <App>
        <BrowserRouter>
          <ProtectedRoute path="/appointments" component={AppointmentsList} isAuth />
        </BrowserRouter>
      </App>
    </Provider>,
  );
  expect(screen.getByTestId('appointments')).toHaveTextContent('Appointments');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </App>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
