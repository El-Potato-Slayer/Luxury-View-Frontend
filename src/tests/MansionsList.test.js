import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MansionsList from '../containers/MansionsList';
import store from '../mocks/store/configureStore';
import App from '../App';

jest.mock('axios');
afterEach(cleanup);

test('Renders the MansionsList component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <MansionsList />
      </BrowserRouter>
    </Provider>,
    div,
  );
});

test('Checks if title is rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MansionsList />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('mansions')).toHaveTextContent('Mansions');
});

test('Checks if mansions are rendered', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <MansionsList />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).toHaveTextContent('Suganti Vapi');
  expect(screen.getByTestId('mansions')).toHaveTextContent('6 Bed Mansion');
  expect(screen.getByTestId('mansions')).toHaveTextContent('Modern Trophy Estate');
  expect(screen.getByTestId('mansions')).toHaveTextContent('Videa Casale');
});

test('Checks if rooms are rendered', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <MansionsList />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).toHaveTextContent('6 Bedrooms');
  expect(screen.getByTestId('mansions')).toHaveTextContent('8 Bedrooms');
  expect(screen.getByTestId('mansions')).toHaveTextContent('7 Bedrooms');
  expect(screen.getByTestId('mansions')).toHaveTextContent('5 Bedrooms');
});

test('Checks if bathrooms are rendered', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <MansionsList />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).toHaveTextContent('6 Bathrooms');
  expect(screen.getByTestId('mansions')).toHaveTextContent('11 Bathrooms');
  expect(screen.getByTestId('mansions')).toHaveTextContent('12 Bathrooms');
  expect(screen.getByTestId('mansions')).toHaveTextContent('8 Bathrooms');
});

test('Checks if agents are rendered', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <MansionsList />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).toHaveTextContent('Joshua Door');
  expect(screen.getByTestId('mansions')).toHaveTextContent('Darlene');
  expect(screen.getByTestId('mansions')).toHaveTextContent('Yapi Kobustus');
});

test('Checks if prices are rendered', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <MansionsList />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).toHaveTextContent('$ 100,000,000');
  expect(screen.getByTestId('mansions')).toHaveTextContent('$ 26,000,000');
  expect(screen.getByTestId('mansions')).toHaveTextContent('$ 35,000,000');
  expect(screen.getByTestId('mansions')).toHaveTextContent('$ 2,500,000');
});

test('Checks if prices are not rendered without commas', () => {
  render(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <Switch>
            <MansionsList />
          </Switch>
        </BrowserRouter>
      </App>
    </Provider>,
  );
  fireEvent.click(screen.getByTestId('navbar-mansions'));
  expect(screen.getByTestId('mansions')).not.toHaveTextContent('$ 100000000');
  expect(screen.getByTestId('mansions')).not.toHaveTextContent('$ 26000000');
  expect(screen.getByTestId('mansions')).not.toHaveTextContent('$ 35000000');
  expect(screen.getByTestId('mansions')).not.toHaveTextContent('$ 2500000');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App>
        <BrowserRouter>
          <MansionsList />
        </BrowserRouter>
      </App>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
