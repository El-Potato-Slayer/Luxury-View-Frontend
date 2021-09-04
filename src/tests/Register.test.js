import {
  act,
  cleanup, fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../mocks/store/configureStore';
import App from '../App';
import Register from '../components/Register';
import Navbar from '../components/Navbar';

jest.mock('axios');
afterEach(cleanup);

test('Renders the Register component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </App>
    </Provider>, div,
  );
});

test('Checks that title is rendered', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <App>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </App>
      </Provider>,
    );
  });
  act(() => {
    fireEvent.click(screen.getByTestId('navbar-register'));
  });

  await waitFor(() => {
    expect(screen.getByTestId('register')).toHaveTextContent('Register');
  });
});

test('Checks that unknown title is not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('register')).not.toHaveTextContent('Jakey');
});

test('Checks that first name input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('First Name')).toBeInTheDocument();
});

test('Checks that last name input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Last Name')).toBeInTheDocument();
});

test('Checks that username input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Username')).toBeInTheDocument();
});

test('Checks that email input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument();
});

test('Checks that password input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Password')).toBeInTheDocument();
});

test('Checks that unknown input is not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Quake')).not.toBeInTheDocument();
});

test('Checks that submit button is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByText('Submit')).toBeInTheDocument();
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
