import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import '@testing-library/jest-dom';
import store from '../mocks/store/configureStore';
// import store from './store/configureStore';

afterEach(cleanup);

it('Renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div,
  );
});

test('Renders the homepage', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-homepage'));
  expect(screen.getByTestId('homepage')).toHaveTextContent("The World'sLuxury Marketplace");
});

test('Renders mansions component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).toHaveTextContent('Mansions');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
