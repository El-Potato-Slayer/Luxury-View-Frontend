import {
  cleanup, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../mocks/store/configureStore';
import App from '../App';
import Login from '../components/Login';

jest.mock('axios');
afterEach(cleanup);

test('Renders the Register component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </App>
    </Provider>, div,
  );
});

test('Checks that title is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('login')).toHaveTextContent('Login');
});

test('Checks that unknown title is not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('login')).not.toHaveTextContent('Jakey');
});

test('Checks that first name input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Username')).toBeInTheDocument();
});

test('Checks that password input is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Password')).toBeInTheDocument();
});

test('Checks that unknown input is not rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByPlaceholderText('Quake')).not.toBeInTheDocument();
});

test('Checks that submit button is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.queryByText('Submit')).toBeInTheDocument();
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
